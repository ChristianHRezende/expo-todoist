import React, {ComponentProps} from 'react';
import {StyleSheet, Text} from 'react-native';

import {Link as RouterLink} from 'expo-router';

interface LinkProps extends ComponentProps<typeof RouterLink> {
  title: string;
}

export const Link = ({title, ...restProps}: LinkProps) => {
  return (
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
