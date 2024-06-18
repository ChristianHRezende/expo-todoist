import {Appbar, Avatar, IconButton} from 'react-native-paper';

import {Image, StyleSheet, Text, View} from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';
//@ts-ignore
import imgAvatar from '@/assets/images/imgAvatar.png';

export const AppBarHeadWelcomeToNotes = () => {
  return (
    <Appbar.Header style={styles.appBarWelcome}>
      <IconButton
        icon={({color, size}) => (
          <MaterialIcons name="menu" size={24} color="black" />
        )}
        onPress={() => console.log('clicou')}
        iconColor="blue"
      />
      <View style={styles.contentContainer}>
        <Appbar.Content
          title="Welcome to Notes, Crisin"
          titleStyle={styles.title}
        />
        <Text style={styles.subtitle}>Greate nice day for managing Task</Text>
      </View>
      <Avatar.Icon
        icon={() => <Image source={imgAvatar} style={styles.avatar} />} // Exemplo de tamanho personalizado
        size={30}
        // perguntar o crisin sobre essa bola azul que ficou la atras se mudar o size para 40
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appBarWelcome: {
    marginTop: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 15,
  },
  subtitle: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 0,
    opacity: 0.5,
    marginVertical: 15,
  },
  avatar: {
    marginRight: 20,
    backgroundColor: 'black',
    width: 50,
    height: 50,
  },
});

export default AppBarHeadWelcomeToNotes;
