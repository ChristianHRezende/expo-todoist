import React, {ComponentProps} from 'react';
import {StyleSheet, Text} from 'react-native';

import {Link as RouterLink} from 'expo-router';

interface LinkProps extends ComponentProps<typeof RouterLink> {
  // allows link acept the prop for routerLink and title
  title: string; //defined for text view in link
}

export const Link = ({title, ...restProps}: LinkProps) => {
  return (
    // recive props defined in interface linkProps for used sopred operator (...restProps)
    <RouterLink {...restProps}>
      <Text style={styles.text}>{title}</Text>
    </RouterLink>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#2DD8FE',
    textAlign: 'center',
  },
});
