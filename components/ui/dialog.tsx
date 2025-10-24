import * as DialogPrimitive from "@rn-primitives/dialog";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "./Text";

type ModalProps = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  title?: string | React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  showCloseButton?: boolean;
  withSeparator?: boolean;
};

export default function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  showCloseButton,
  withSeparator,
}: ModalProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className="absolute inset-0 bg-black/40"
          closeOnPress
        />
        <DialogPrimitive.Content className="absolute inset-x-4 top-[10%] bottom-[10%] bg-white rounded-xl p-6 flex-1">
          {title && (
            <DialogPrimitive.Title className="text-xl font-bold mb-2">
              {title}
            </DialogPrimitive.Title>
          )}
          {showCloseButton && (
            <DialogPrimitive.Close asChild>
              <TouchableOpacity className="absolute top-6 right-6 p-2 w-10 h-10 items-center justify-center">
                <Text className="text-neutral-900 text-sm">✕</Text>
              </TouchableOpacity>
            </DialogPrimitive.Close>
          )}

          {description && (
            <DialogPrimitive.Description className="text-gray-500 mb-4 mt-2">
              {description}
            </DialogPrimitive.Description>
          )}
          {withSeparator && <View className="h-0.5 bg-gray-200 mb-4" />}

         <View className="flex-1">{children}</View>

          {/* {showCloseButton && (
            <View className="mt-4 items-end">
              <DialogPrimitive.Close asChild>
                <Pressable className="px-4 py-2 rounded-full bg-gray-200">
                  <Text>Close</Text>
                </Pressable>
              </DialogPrimitive.Close>
            </View>
          )} */}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
