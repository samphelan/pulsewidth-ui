import { ChangeEvent } from 'react';
import { ChangeEventHandler } from 'react';
import { ComponentProps } from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { CSSProperties } from 'react';
import { default as default_2 } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { MouseEvent as MouseEvent_2 } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';

export declare const Accordion: ForwardRefExoticComponent<AccordionProps & RefAttributes<HTMLDivElement>>;

export declare const AccordionContent: ForwardRefExoticComponent<AccordionContentProps & RefAttributes<HTMLDivElement>>;

declare interface AccordionContentProps {
    children?: React.ReactNode;
}

export declare const AccordionHeader: ForwardRefExoticComponent<AccordionHeaderProps & RefAttributes<HTMLButtonElement>>;

declare interface AccordionHeaderProps {
    children?: ReactNode;
    indicatorPos?: "left" | "right";
}

declare interface AccordionProps {
    children?: ReactNode;
    expanded?: boolean;
    disabled?: boolean;
    className?: string;
}

export declare const Autocomplete: ({ suggestions, value, onChange, onSelection, inputClassName, inputStyles, listClassName, listStyles, ...rest }: AutocompleteProps) => JSX_2.Element;

declare interface AutocompleteProps extends ComponentProps<"input"> {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onSelection?: (selection: string) => void;
    suggestions?: string[];
    inputClassName?: string;
    inputStyles?: CSSProperties;
    listClassName?: string;
    listStyles?: CSSProperties;
}

export declare const Avatar: ({ url, text }: AvatarProps) => JSX_2.Element;

declare interface AvatarProps {
    url?: string;
    text?: string;
}

export declare const Button: ForwardRefExoticComponent<Omit<any, "ref"> & RefAttributes<HTMLElement>>;

export declare const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<HTMLInputElement>>;

declare interface CheckboxProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
    size?: "small" | "medium" | "large";
    indeterminate?: boolean;
    label?: string;
    variant?: "square" | "circle";
}

export declare const Flex: ForwardRefExoticComponent<FlexProps & RefAttributes<HTMLDivElement>>;

declare interface FlexProps extends ComponentPropsWithoutRef<"div"> {
    direction?: React.CSSProperties["flexDirection"];
    align?: React.CSSProperties["alignItems"];
    justify?: React.CSSProperties["justifyContent"];
    textAlign?: React.CSSProperties["textAlign"];
}

export declare const List: ForwardRefExoticComponent<ListProps & RefAttributes<HTMLUListElement>>;

export declare const ListItem: ForwardRefExoticComponent<ListItemProps & RefAttributes<HTMLLIElement>>;

export declare const ListItemButton: ForwardRefExoticComponent<Omit<any, "ref"> & RefAttributes<HTMLElement>>;

declare interface ListItemProps extends ComponentPropsWithoutRef<"li"> {
    children?: ReactNode;
}

declare interface ListProps extends ComponentPropsWithoutRef<"ul"> {
    children?: ReactNode;
    unstyled?: boolean;
}

declare const Option_2: ({ children, onClick }: OptionProps) => JSX_2.Element;
export { Option_2 as Option }

declare interface OptionProps {
    value: string;
    children?: ReactNode;
    onClick?: (e: MouseEvent_2<HTMLButtonElement>) => void;
}

export declare const Password: ForwardRefExoticComponent<PasswordProps & RefAttributes<HTMLInputElement>>;

declare interface PasswordProps {
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export declare const Phone: ({ value, onChange }: PhoneInputProps) => JSX_2.Element;

declare type PhoneInputProps = {
    value?: string;
    onChange?: (v: string) => void;
};

export declare const Radio: ForwardRefExoticComponent<RadioButtonProps & RefAttributes<HTMLInputElement>>;

declare interface RadioButtonProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
    size?: "small" | "medium" | "large";
    label?: string;
    iconChecked?: React.ReactNode;
    iconUnchecked?: React.ReactNode;
}

export declare const Select: {
    ({ children }: SelectProps): JSX_2.Element;
    displayName: string;
};

declare interface SelectProps {
    children?: ReactNode;
}

export declare const Slider: default_2.ForwardRefExoticComponent<SliderProps & default_2.RefAttributes<HTMLDivElement>>;

declare interface SliderProps {
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (value: number) => void;
}

export declare const TextInput: ForwardRefExoticComponent<Omit<TextInputProps, "ref"> & RefAttributes<HTMLInputElement>>;

declare interface TextInputProps extends ComponentProps<"input"> {
    variant?: string;
}

export { }
