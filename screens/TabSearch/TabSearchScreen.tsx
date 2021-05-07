import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import { RootStackParamList, BottomTabParamList, TabSearchParamList, TabAppointmentParamList, TabMessageParamList, TabProfileParamList } from '../types';
import { Ionicons } from '@expo/vector-icons';
import api from '../../utils/api';
import { appKey } from '../../utils/env';
import { SpinerOverlay } from '../../components/SpinerOverlay';

const doctorAvatar = require('../../assets/img/profile1.png');

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

const Item = ({ item, navigation }) => (
  <TouchableOpacity style={[styles.searchItem, styles.shadow]}
    onPress={() => navigation.navigate('DoctorDetailScreen', {screen: 'DoctorDetailScreen'})}
  >
    <Image
      style={styles.profileImage}
      source={doctorAvatar}
    />
    <View>
      <Text style={[styles.text, styles.textBold]}>{item.fullname}</Text>
      <Text style={styles.text}>{item.location}</Text>
      <Text style={styles.text}>{item.specialties}</Text>
    </View>
  </TouchableOpacity>
);

export default function TabSearchScreen({
  navigation,
}: StackScreenProps<TabSearchParamList, 'NotFound'>) {

  const [loading, setLoading] = React.useState(false);
  const [search, onChangeSearch] = React.useState("");
  const [doctors, setDoctors] = React.useState([]);

  const renderItem = ({ item }) => (
    <Item item={item} navigation={navigation} />
  )

  React.useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = () => {
    setLoading(true);
    api.searchDoctor({search})
      .then((res: any) => {
        if(res.status === 200) {
          try {
            console.log('>>>', res);
            setDoctors(res.data);
          } catch (e) {
            throw e;
          }
        }
        setLoading(false);
      })
      .catch(err => {
        console.log('err: signup - ', err);
        setLoading(false);
      })
  }

  return (
    <View style={styles.container}>
      <SpinerOverlay visible={loading} />
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          onChangeText={onChangeSearch}
          value={search}
        />
        <TouchableOpacity style={styles.searchButton}
          onPress={() => handleSearch()}
        >
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.searchList}
        data={doctors}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
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
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#c3c3c3',
    borderRadius: 20,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
  },
  searchButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchList: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
  searchItem: {
    backgroundColor: '#e0f7ff',
    flex: 1,
    padding: 15,
    margin: 5,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  textBold: {
    fontWeight: 'bold',
  }
});
