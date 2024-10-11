export const formatCSSModuleClasses = (styles: any) => {
    return (classes: string[]) => classes.map((name) => styles[name]).join(" ");
};