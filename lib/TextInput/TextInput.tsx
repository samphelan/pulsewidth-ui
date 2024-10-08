import { ComponentProps, forwardRef } from "react";

interface TextInputProps extends ComponentProps<"input"> {
  value?: string;
}

export const TextInput = forwardRef(function TextInput(
  { value, ...rest }: TextInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return <input type="text" {...rest} ref={ref} />;
});
