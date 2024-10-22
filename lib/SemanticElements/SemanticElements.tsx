import { Flex } from "pulsewidth-ui";
import { FlexProps } from "../Flex/Flex";

export const Article = ({ ...props }: FlexProps<"article">) => {
  return <Flex as="article" {...props} />;
};

export const Aside = ({ ...props }: FlexProps<"aside">) => {
  return <Flex as="aside" {...props} />;
};

export const Details = ({ ...props }: FlexProps<"details">) => {
  return <Flex as="details" {...props} />;
};

export const Figcaption = ({ ...props }: FlexProps<"figcaption">) => {
  return <Flex as="figcaption" {...props} />;
};

export const Figure = ({ ...props }: FlexProps<"figure">) => {
  return <Flex as="figure" {...props} />;
};

export const Footer = ({ ...props }: FlexProps<"footer">) => {
  return <Flex as="footer" {...props} />;
};

export const Header = ({ ...props }: FlexProps<"header">) => {
  return <Flex as="header" {...props} />;
};

export const Main = ({ ...props }: FlexProps<"main">) => {
  return <Flex as="main" {...props} />;
};

export const Mark = ({ ...props }: FlexProps<"mark">) => {
  return <Flex as="mark" {...props} />;
};

export const Nav = ({ ...props }: FlexProps<"nav">) => {
  return <Flex as="nav" {...props} />;
};

export const Section = ({ ...props }: FlexProps<"section">) => {
  return <Flex as="section" {...props} />;
};

export const Summary = ({ ...props }: FlexProps<"summary">) => {
  return <Flex as="summary" {...props} />;
};

export const Time = ({ ...props }: FlexProps<"time">) => {
  return <Flex as="time" {...props} />;
};
