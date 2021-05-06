import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { FlatList, TextInput, Image } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Ajay Marwaga',
    summary: 'Dental Doctor',
    img: require('../../assets/img/profile1.png'),
    specialties: 'A B C',
    locations: 'California',
    reviews: '5',
    available_hours: '10:00 am - 04:00 pm',
    scheduled_hours: '02:00 pm - 03:00 pm',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Roberto Blackwell',
    summary: 'Dental Doctor',
    img: require('../../assets/img/profile2.png'),
    specialties: 'A B C',
    locations: 'California',
    reviews: '5',
    available_hours: '10:00 am - 04:00 pm',
    scheduled_hours: '02:00 pm - 03:00 pm',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Jean Louis',
    summary: 'Dental Doctor',
    img: require('../../assets/img/profile3.png'),
    specialties: 'A B C',
    locations: 'California',
    reviews: '5',
    available_hours: '10:00 am - 04:00 pm',
    scheduled_hours: '02:00 pm - 03:00 pm',
  },
];

const Item = ({ item }) => (
  <View style={[styles.searchItem, styles.shadow]}>
    <Image
      style={styles.profileImage}
      source={item.img}
    />
    <View>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.summary}</Text>
      <Text style={styles.text}>{item.specialties}</Text>
    </View>
  </View>
);

export default function TabSearchScreen() {
  const [text, onChangeText] = React.useState("Useless Text");

  const renderItem = ({ item }) => (
    <Item item={item} />
  )

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <FlatList
        style={styles.searchList}
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
  searchBar: {
    backgroundColor: '#3698d5',
    height: 50,
    width: '100%',
    padding: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#32475c',
    borderRadius: 20,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
  },
  searchList: {
    width: '100%',
    flex: 1,
    backgroundColor: 'red',
    padding: 5,
  },
  searchItem: {
    backgroundColor: '#e0f7ff',
    flex: 1,
    padding: 15,
    margin: 5,
    borderRadius: 8,
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    backgroundColor: '#e0f7ff',
  }
});
