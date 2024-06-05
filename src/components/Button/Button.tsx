import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native';

interface ButtonProps extends TouchableHighlightProps {
  variant?: 'contained' | 'text';
  title: string;
}

export const Button = ({
  variant = 'text',
  title,
  ...restProps
}: ButtonProps) => {
  return (
    <TouchableHighlight
      style={variant === 'contained' ? styles.contained : {}}
      {...restProps}>
      <Text style={variant === 'text' ? styles.text : styles.containedText}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  contained: {
    backgroundColor: '#2DD8FE',
    borderRadius: 30,
    paddingVertical: 10,
    minWidth: 300,
  },
  containedText: {
    textAlign: 'center',
  },
  text: {
    color: '#2DD8FE',
    textAlign: 'center',
  },
});
