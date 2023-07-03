import { useState } from "react";

interface MutationState {
	loading: boolean;
	data: undefined | any;
	error: undefined | any;
}

type MutationHookReturn = [(data: any) => void, MutationState];

export default function useMutation(url: string): MutationHookReturn {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<undefined | any>(undefined);
	const [error, setError] = useState<undefined | any>(undefined);

	function mutate(data: any) {
		setLoading(true);
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json().catch(() => {}))
			.then(setData) //.then((json) => setData(json))
			.catch(setError)
			.finally(() => setLoading(false));
	}
	return [mutate, { loading, data, error }];
}
