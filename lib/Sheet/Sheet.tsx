import { Colors, Flex, Radius, Variant } from "pulsewidth-ui";
import { InternalFlexProps } from "../Flex/Flex";
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";

interface InternalSheetProps<T extends ElementType>
  extends InternalFlexProps<T> {
  variant?: Variant;
  colorVariant?: Colors;
  radius?: Radius;
  children?: ReactNode;
}

type SheetProps<T extends ElementType> = InternalSheetProps<T> &
  ComponentPropsWithoutRef<T>;

export const Sheet = forwardRef(function Sheet<T extends ElementType>(
  {
    variant = "plain",
    colorVariant = "gray",
    radius = 3,
    as = "div" as T,
    children,
    className,
  }: SheetProps<T> & ComponentPropsWithRef<T>,
  ref: ForwardedRef<T>
) {
  return (
    <Flex
      as={as}
      ref={ref}
      className={`static-variant--${variant} opaque radius${radius} ${className}`}
      data-color={colorVariant}
    >
      {children}
    </Flex>
  );
}) as <T extends ElementType>(
  props: SheetProps<T> & {
    ref?: ForwardedRef<ComponentPropsWithRef<T>["ref"]>;
  }
) => JSX.Element;
