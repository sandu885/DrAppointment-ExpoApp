import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
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

export default function DoctorDetailScreen() {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Image style={styles.profileImage} source={user.img} />
        </View>
        <View style={styles.bodySection}>
          <View style={styles.profileCard}>
            <View style={styles.profileInfo}>
              <Text style={styles.titleText}>Dudung Sokamti</Text>
              <Text style={[styles.subTitleText, {color: '#3698d5'}]}>Eye Specialist</Text>
              <Text style={styles.summaryText}>4.9</Text>
              <Text style={styles.summaryText}>
                Maecenas fringilla commodolacus, a eleifend liberodictum at. Cras nisi dolor, porta et iaculis sit amet, facilisis sit amet tellus. Donec vitase venenatis orci, a molestie massa. Nunc ultrices posuere risus, id vol.
              </Text>
            </View>
          </View>
          <View style={styles.scheduleCard}>
            <View style={styles.scheduleRow}>
              <Text style={styles.titleText}>Book a Date</Text>
              <View></View>
            </View>
            <View style={styles.scheduleRow}>
              <Text style={styles.titleText}>Select a Time</Text>
              <View style={styles.timeTags}>
                <TouchableOpacity style={styles.timeTag}>
                  <Text>8:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeTag}>
                  <Text>11:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeTag}>
                  <Text>13:30</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeTag}>
                  <Text>18:00</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.buttonSection}>
              <TouchableOpacity style={styles.messageButton}>
                <Text style={{color: '#3698d5', fontSize: 16}}>Send Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={{color: '#fff', fontSize: 16}}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  headerSection: {
    alignItems: 'center',
    paddingTop: 20,
  },
  profileImage: {
    width: 90,
    height: 90, 
    borderRadius: 50,
    margin: 5,
    marginRight: 15,
    borderColor: '#3698d5',
    borderWidth: 1,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
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
    paddingHorizontal: 15,
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
  scheduleCard: {
    borderWidth: 1,
    borderColor: '#c3c3c3',
    borderRadius: 8,
    flexDirection: 'column',
    padding: 10,
    marginVertical: 10,
  },
  scheduleRow: {
    flexDirection: 'column',
    paddingVertical: 5,
  },
  timeTags: {
    flexDirection: 'row',
  },
  timeTag: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#c3c3c3',
    borderRadius: 4,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSection: {
    flex: 2,
    flexDirection: 'row',
    marginTop: 10,
  },
  messageButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#3698d5',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  bookButton: {
    flex: 1,
    backgroundColor: '#3698d5',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  }
});
