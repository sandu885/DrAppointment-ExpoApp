import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import { RootStackParamList, BottomTabParamList, TabSearchParamList, TabAppointmentParamList, TabMessageParamList, TabProfileParamList } from '../types';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Ajay Marwaga',
    profileImage: require('../../assets/img/profile2.png'),
    last_message: 'Hello',
    has_unread_message: true,
    unread_messages: 3,
    last_seen: '2021-05-06 20:00'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3af53abb28bb',
    name: 'Roberto Blackwell',
    profileImage: require('../../assets/img/profile3.png'),
    last_message: 'Hello, how are you?',
    has_unread_message: false,
    unread_messages: 0,
    last_seen: '2021-05-06 20:00'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    name: 'Ajay Marwaga',
    profileImage: require('../../assets/img/profile2.png'),
    last_message: 'Hello',
    has_unread_message: true,
    unread_messages: 3,
    last_seen: '2021-05-06 20:00'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3af53abb28bd',
    name: 'Roberto Blackwell',
    profileImage: require('../../assets/img/profile3.png'),
    last_message: 'Hello, how are you?',
    has_unread_message: false,
    unread_messages: 0,
    last_seen: '2021-05-06 20:00'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
    name: 'Ajay Marwaga',
    profileImage: require('../../assets/img/profile2.png'),
    last_message: 'Hello',
    has_unread_message: true,
    unread_messages: 3,
    last_seen: '2021-05-06 20:00'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3af53abb28bf',
    name: 'Roberto Blackwell',
    profileImage: require('../../assets/img/profile3.png'),
    last_message: 'Hello, how are you?',
    has_unread_message: false,
    unread_messages: 0,
    last_seen: '2021-05-06 20:00'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bg',
    name: 'Ajay Marwaga',
    profileImage: require('../../assets/img/profile2.png'),
    last_message: 'Hello',
    has_unread_message: true,
    unread_messages: 3,
    last_seen: '2021-05-06 20:00'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3af53abb28bh',
    name: 'Roberto Blackwell',
    profileImage: require('../../assets/img/profile3.png'),
    last_message: 'Hello, how are you?',
    has_unread_message: false,
    unread_messages: 0,
    last_seen: '2021-05-06 20:00'
  },
];

const Item = ({ item, navigation }) => (
  <TouchableOpacity style={styles.messageItem}
    onPress={() => navigation.navigate('Chat', {screen: 'ChatScreen'})}
  >
    <Image
      style={styles.profileImage}
      source={item.profileImage}
    />
    <View style={{flex: 4, flexDirection: 'row'}}>
      <View style={{flex: 3, flexDirection: 'column'}}>
        <Text style={[styles.text, styles.textBold]}>{item.name}</Text>
        <Text style={styles.text}>{item.last_message}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.text}>{item.last_seen}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default function TabMessageScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const [text, onChangeText] = React.useState("Useless Text");

  const renderItem = ({ item }) => (
    <Item item={item} navigation={navigation} />
  )

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.messageList}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  messageList: {
    width: '100%',
    flex: 1,
  },
  messageItem: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  profileImage: {
    width: 50,
    height: 50, 
    borderRadius: 30,
    marginRight: 15,
    borderColor: '#3698d5',
    borderWidth: 1,
  },
  text: {
    backgroundColor: '#fff',
  },
  textBold: {
    fontWeight: 'bold',
  }
});
