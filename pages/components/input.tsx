import type { UseFormRegisterReturn } from "react-hook-form";
import { cls } from "../libs/client/utils";

interface TypedInputProps {
	type: string;
	id: string;
	register: UseFormRegisterReturn;
	required: boolean;
	placeholder?: string;
	width?: string;
}

const tmpClassName =
	"mt-1 px-2 py-1 text-sm appearance-none border-black placeholder-zinc-400 focus:outline-0 focus:border-black focus:ring-0";

export function TypedInput({
	type,
	id,
	register,
	required,
	placeholder,
	width,
}: TypedInputProps) {
	const typedInputClass = cls(tmpClassName, width ? width : "w-full");
	return id === "phone" ? (
		<div className="w-full flex items-center">
			<span className="text-sm mt-1 h-full flex items-center justify-center px-2 py-1 rounded-l-sm border-2 border-r-0 border-black   select-none font-medium ">
				+1
			</span>
			<label htmlFor={id} />
			<input
				type={type}
				id={id}
				className={cls(
					typedInputClass,
					"border-l-0 border-t-2 border-r-2 border-b-2 rounded-r-sm rounded-l-0"
				)}
				placeholder={placeholder || ""}
				{...register}
				required={required}
			/>
		</div>
	) : (
		<>
			<label htmlFor={id} />
			<input
				type={type}
				id={id}
				className={cls(typedInputClass, "border-2 rounded-sm")}
				placeholder={placeholder || ""}
				{...register}
				required={required}
			/>
		</>
	);
}
