import { classNames } from "../utils";

export default function Input(props) {
  return (
    <input
      {...props}
      className={classNames(
        "block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/8 text-white",
        props.className || ""
      )}
    />
  );
}
