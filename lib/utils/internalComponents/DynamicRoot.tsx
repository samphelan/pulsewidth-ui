import { ComponentPropsWithRef, ElementType, ReactNode } from "react";

interface DynamicRootProps<T extends ElementType> {
  as?: T;
  children?: ReactNode;
  props?: ComponentPropsWithRef<T>;
}

const DynamicRoot = <T extends ElementType = "div">({
  as: Component = "div" as T,
  children,
  ...props
}: DynamicRootProps<T> & ComponentPropsWithRef<T>) => {
  return <Component {...props}>{children}</Component>;
};

export default DynamicRoot;
