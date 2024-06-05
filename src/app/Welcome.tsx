import {Image} from 'expo-image';
import {Alert, StyleSheet, Text, View} from 'react-native';
//@ts-ignore
import welcomeWelcomeGuyImage from '@/assets/images/welcome-welcome-guy.png';
import {Button} from '@/components/Button/Button';
import {Link} from '@/components/Link/Link';

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image
        ref={null}
        source={welcomeWelcomeGuyImage}
        style={styles.image}
        placeholder="welcome guy image"
        contentFit="contain"
      />
      <Text>Let's Organize Your Note TODO</Text>
      <Text style={styles.secondaryText}>
        Make your todo in the note and manage your priority activity in daily
        life to achieve goals.
      </Text>
      <Button
        testID="welcome-welcome-get-started"
        title={'Get Started'}
        variant="contained"
        onPress={() => {
          Alert.alert('WIP');
        }}
      />
      <Link
        testID="welcome-welcome-sign-in"
        title={'Already have an account? Sign In'}
        href={'auth/signIn'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '70%',
  },
  secondaryText: {
    marginHorizontal: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
});
