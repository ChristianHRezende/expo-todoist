import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';

export const CardWelcomeToNotes = () => (
  <Card>
    <Card.Title
      titleStyle={style.textTitle}
      subtitleStyle={style.textTitle}
      title="Mobile App Design"
      subtitle="Travel"
    />

    <Card.Content style={style.textStyleCard}>
      <Text variant="titleLarge">New York </Text>
      <Text variant="bodyMedium">By car</Text>
    </Card.Content>
    <Card.Cover
      source={{
        uri: 'https://descubraeua.com.br/wp-content/uploads/2020/06/manhattan-nova-york-1024x576.jpg',
      }}
    />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

const style = StyleSheet.create({
  textStyleCard: {
    display: 'flex',
    alignItems: 'center',
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default CardWelcomeToNotes;
