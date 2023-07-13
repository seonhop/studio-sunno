import { useState } from "react";

interface MutationState<T> {
	loading: boolean;
	data?: T;
	error?: object;
}

type MutationHookReturn<T> = [(data: any) => void, MutationState<T>];

export default function useMutation<T = any>(
	url: string
): MutationHookReturn<T> {
	const [state, setState] = useState<MutationState<T>>({
		loading: false,
		data: undefined,
		error: undefined,
	});

	function mutate(data: any) {
		setState((prev) => ({ ...prev, loading: true }));
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json().catch(() => {}))
			.then((data) => setState((prev) => ({ ...prev, data })))
			.catch((error) => setState((prev) => ({ ...prev, error })))
			.finally(() => setState((prev) => ({ ...prev, loading: false })));
	}
	return [mutate, { ...state }];
}
