import { cls } from "../libs/utils";

interface TypedInputProps {
	type: string;
	id: string;
	placeholder?: string;
	width?: string;
}

let typedInputClass =
	"mt-1 px-2 py-1 text-sm appearance-none border-black placeholder-zinc-400 focus:outline-0 focus:border-black focus:ring-0";

export function TypedInput({ type, id, placeholder, width }: TypedInputProps) {
	typedInputClass = cls(typedInputClass, width ? width : "w-full");
	return type === "number" ? (
		<div className="w-full flex items-center">
			<span className="text-sm mt-1 h-full flex items-center justify-center px-2 py-1 rounded-l-sm border-2 border-r-0 border-black   select-none font-medium ">
				+1
			</span>
			<input
				type={type}
				id={id}
				className={cls(
					typedInputClass,
					"border-l-0 border-t-2 border-r-2 border-b-2 rounded-r-sm rounded-l-0"
				)}
				placeholder={placeholder || ""}
			/>
		</div>
	) : (
		<input
			type={type}
			id={id}
			className={cls(typedInputClass, "border-2 rounded-sm")}
			placeholder={placeholder || ""}
		/>
	);
}
