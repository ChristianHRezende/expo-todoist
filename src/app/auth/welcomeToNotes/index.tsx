import {View} from 'react-native';
import AppBarHeadWelcomeToNotes from './AppBarHeadWelcomeToNotes';
import CardWelcomeToNotes from './CardWelcomeToNotes';

const WelcomeToNotesPag = () => {
  return (
    <View>
      <AppBarHeadWelcomeToNotes></AppBarHeadWelcomeToNotes>
      <CardWelcomeToNotes></CardWelcomeToNotes>
    </View>
  );
};

export default WelcomeToNotesPag;
