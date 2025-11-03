import { cn } from "@/libs/cn";
import { MaterialIcons } from "@expo/vector-icons";
import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "./Text";

const textInputVariants = cva(
  "border border-neutral-200 rounded-lg py-3 pl-2 b14-regular text-neutral-900 text-[14px] bg-white",
  {
    variants: {
      type: {
        default: "pr-4",
        password: "pr-32",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);

const labelVariants = cva("text-[#777980] font-medium");

interface PrimaryTextInput extends TextInputProps, VariantProps<typeof textInputVariants> {
  label: string;
  value: string;
  labelClassName?: string;
  className?: string;
  placeholder?: string;
  keyboardType?: TextInputProps["keyboardType"];
  maxLength?: number;
  showPrefix?: boolean;
  customSuffix?: React.ReactNode;
  isPassword?: boolean;
  errorText?: string;
  onChangeText?: (text: string) => void;
  onPressSufix?: () => void;
}

export default function PrimaryTextInput({
  label,
  value,
  placeholder,
  keyboardType,
  maxLength,
  showPrefix,
  isPassword,
  labelClassName,
  className,
  errorText,
  customSuffix,
  onPressSufix,
  onChangeText,
  ...props
}: PrimaryTextInput) {
  const [showValue, setShowValue] = useState(!isPassword);

  return (
    <View className="w-full">
      <View className="flex-row flex-wrap">
        <Text className={cn(labelVariants(), labelClassName)}>
          {label}
        </Text>
        <View className="w-full relative mt-2">
          <TextInput
            className={cn(
              textInputVariants({
                type: isPassword ? "password" : "default",
              }),
              className
            )}
            style={{
              ...(isPassword && {
                letterSpacing:
                  isPassword && !showValue && value.length > 0 ? 2 : 0,
              }),
            }}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            maxLength={maxLength}
            secureTextEntry={isPassword && !showValue}
            onChangeText={onChangeText}
            {...props}
          />
          {isPassword && (
            <TouchableOpacity
              onPress={() => setShowValue(!showValue)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 z-10"
            >
              <MaterialIcons
                name={showValue ? "visibility" : "visibility-off"}
                size={24}
                color="#898989"
              />
            </TouchableOpacity>
          )}
          {customSuffix && (
            <TouchableOpacity
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 z-10"
              onPress={onPressSufix}
            >
              {customSuffix}
            </TouchableOpacity>
          )}
        </View>
        {errorText && (
          <Text className="text-red-500 text-sm mt-1">{errorText}</Text>
        )}
      </View>
    </View>
  );
}
