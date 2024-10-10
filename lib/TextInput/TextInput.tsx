import { ComponentProps, forwardRef } from "react";

interface TextInputProps extends ComponentProps<"input"> {
  variant?: string;
}

export const TextInput = forwardRef(function TextInput(
  { variant, ...rest }: TextInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return <input type="text" {...rest} ref={ref} />;
});
