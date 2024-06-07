import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native';
// import from react native for use botton

interface ButtonProps extends TouchableHighlightProps {
  // define button with props TouchableHighlightProps and prop for interface
  variant?: 'contained' | 'text'; // define button witch color botton (conatiner) or only text
  title: string; //text displayed
}

export const Button = ({
  // return component clicking
  variant = 'text', // defined conatiner or text
  title, // style for text
  ...restProps // acept all functionatily defined in interface
}: ButtonProps) => {
  return (
    <TouchableHighlight //create touch sensitive area, is defined for the variant
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
