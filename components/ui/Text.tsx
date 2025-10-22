import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  className?: string;
}

export const Text: React.FC<CustomTextProps> = ({ style, className, ...props }) => {
  return (
    <RNText
      style={[
        { fontFamily: 'Geist' },
        style,
      ]}
      className={className}
      {...props}
    />
  );
};

export default Text;