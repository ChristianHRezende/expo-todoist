import {Image} from 'expo-image';
import {StyleSheet, Text, View} from 'react-native';
//@ts-ignore
import welcomeWelcomeGuyImage from '@/assets/images/welcome-welcome-guy.png';
// import {Button} from '@/components/Button/Button';

import {Link} from '@/components/Link/Link';
import {Button} from 'react-native-paper';
import {router} from 'expo-router';

// function component
export const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image // return img
        ref={null}
        source={welcomeWelcomeGuyImage}
        style={styles.image}
        placeholder="welcome guy image"
        contentFit="contain"
        // render with style the text
      />
      <Text>Let's Organize Your Note TODO</Text>
      <Text style={styles.secondaryText}>
        Make your todo in the note and manage your priority activity in daily
        life to achieve goals.
      </Text>

      <Button //button login and navegation for login
        testID="welcome-welcome-get-started"
        mode="contained"
        onPress={() => {
          router.navigate('/auth/login'); // navegando rota para login com route
        }}>
        Login
      </Button>
      <Link // navegation for sign-in
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
