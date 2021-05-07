import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { ScrollView, TouchableOpacity, Image, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const user = {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Ajay Marwaga',
    summary: 'Dental Doctor',
    img: require('../../assets/img/profile1.png'),
    specialties: 'A B C',
    locations: 'California',
    reviews: '5',
    available_hours: '10:00 am - 04:00 pm',
    scheduled_hours: '02:00 pm - 03:00 pm',
  }

export default function AppointmentDetailScreen() {

  const openSkype = async () => {
    const url = `skype:live:.cid.4138a976227638ac`;
    const supported = await Linking.canOpenURL(url);
    if(supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this app`);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.titleText}>You have appoint for call</Text>
        <Text style={[styles.summaryText, {marginTop: 10}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. t. Ut enim ad minim veniam, quis nostrud exercitation ullamco</Text>
      </View>
      <View style={styles.bodySection}>
        <Text style={[styles.titleText, {color: '#3698d5'}]}>Doctor</Text>
        <View style={styles.profileCard}>
          <Image style={styles.profileImage} source={user.img} />
          <View style={styles.profileInfo}>
            <Text style={styles.titleText}>Dudung Sokamti</Text>
            <Text style={[styles.subTitleText, {color: '#3698d5'}]}>Eye Specialist</Text>
            <Text style={styles.summaryText}>4.9</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.callButton}
          onPress={() => openSkype()}
        >
          <Ionicons name="logo-skype" size={24} color="white" />
          <Text style={{color: '#fff', fontSize: 16, marginLeft: 10}}>Start Call On Skype</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  headerSection: {
    alignItems: 'center',
    padding: 30,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subTitleText: {
    fontStyle: 'italic',
  },
  summaryText: {
    color: '#c3c3c3',
    fontSize: 14,
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
  bodySection: {
    flex: 1,
    paddingHorizontal: 30,
  },
  profileCard: {
    borderWidth: 1,
    borderColor: '#c3c3c3',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60, 
    borderRadius: 30,
    margin: 5,
    marginRight: 15,
    borderColor: '#3698d5',
    borderWidth: 1,
  },
  buttonSection: {
    padding: 30,
  },
  callButton: {
    backgroundColor: '#3698d5',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});
