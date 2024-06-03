import {Image} from 'expo-image';
import {StyleSheet, Text, View} from 'react-native';

import welcomeWelcomeGuyImage from '@/assets/images/welcome-welcome-guy.png';

export const Welcome = () => {
  return (
    <View>
      <Image
        ref={null}
        source={welcomeWelcomeGuyImage}
        style={styles.image}
        placeholder="welcome guy image"
        contentFit="contain"
      />
      <Text>Let's Organize Your Note TODO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
