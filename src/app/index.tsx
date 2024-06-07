import {Welcome} from './Welcome';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';

export default function Page() {
  // return main page
  return (
    // statusBar controller behavior status bar
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
