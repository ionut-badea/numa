import { tv, VariantProps } from "tailwind-variants";
import cn from "@/utils/cn";

const textVariants = tv({
  slots: {
    sBase: [""],
  },
  variants: {
    vSize: {
      xs: {
        sBase: ["text-xs"],
      },
      sm: {
        sBase: ["text-sm"],
      },
      base: {
        sBase: ["text-base"],
      },
      lg: {
        sBase: ["text-lg"],
      },
      xl: {
        sBase: ["text-xl"],
      },
      "2xl": {
        sBase: ["text-2xl"],
      },
      "3xl": {
        sBase: ["text-3xl"],
      },
      "4xl": {
        sBase: ["text-4xl"],
      },
      "5xl": {
        sBase: ["text-5xl"],
      },
      "6xl": {
        sBase: ["text-6xl"],
      },
      "7xl": {
        sBase: ["text-7xl"],
      },
      "8xl": {
        sBase: ["text-8xl"],
      },
      "9xl": {
        sBase: ["text-9xl"],
      },
    },
    vWeight: {
      thin: {
        sBase: ["font-thin"],
      },
      extralight: {
        sBase: ["font-extralight"],
      },
      light: {
        sBase: ["font-light"],
      },
      normal: {
        sBase: ["font-normal"],
      },
      medium: {
        sBase: ["font-medium"],
      },
      semibold: {
        sBase: ["font-semibold"],
      },
      bold: {
        sBase: ["font-bold"],
      },
      extrabold: {
        sBase: ["font-extrabold"],
      },
      black: {
        sBase: ["font-black"],
      },
    },
  },
  defaultVariants: {
    vSize: "base",
    vWeight: "normal",
  },
});

type TextVariantsProps = VariantProps<typeof textVariants>;
export interface TextProps extends TextVariantsProps {
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
}

function Text(props: TextProps) {
  const { as: Component = "p", children, className, vSize, vWeight } = props;

  const { sBase } = textVariants({ vSize, vWeight });
  const baseClasses = cn(sBase(), className);

  return <Component className={baseClasses}>{children}</Component>;
}

export default Text;
