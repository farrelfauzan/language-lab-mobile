import { cva, type VariantProps } from "class-variance-authority";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { twMerge } from "tailwind-merge";
import { Text } from "./Text";

const buttonVariants = cva(
  "flex items-center justify-center rounded-lg font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-[#22C55E] active:bg-green-300",
        secondary: "bg-gray-600 active:bg-gray-700",
        outline: "border border-blue-600 bg-transparent active:bg-blue-50",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-6 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const textVariants = cva("font-medium", {
  variants: {
    variant: {
      primary: "text-white",
      secondary: "text-white",
      outline: "text-blue-600",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface PrimaryButtonProps
  extends TouchableOpacityProps,
    VariantProps<typeof buttonVariants> {
  title: string;
  className?: string;
  textClassName?: string;
}

export default function PrimaryButton({
  title,
  variant,
  size,
  className,
  textClassName,
  ...props
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      className={twMerge(buttonVariants({ variant, size }), className)}
      {...props}
    >
      <Text className={twMerge(textVariants({ variant, size }), textClassName)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
