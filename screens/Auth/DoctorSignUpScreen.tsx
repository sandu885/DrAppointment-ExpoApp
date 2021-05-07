import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DoctorSignUpScreen() {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileImageSection}>
          <View style={styles.profileImageWrapper}>
            {/* <Image style={styles.profileImage} source={user.img} /> */}
          </View>
        </View>
        <View style={styles.profileInfoSection}>
          <View style={styles.profileInfoItem}>
            <Text style={styles.labelText}>Full Name</Text>
            <Text style={styles.valueText}>Full Name</Text>
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
  profileImageSection: {
    flex: 1,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageWrapper: {
    width: 120,
    height: 120, 
  },
  profileImage: {
    width: 120,
    height: 120, 
    borderRadius: 60,
    marginRight: 15,
    borderColor: '#3698d5',
    borderWidth: 1,
  },
  profileImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#3698d5',
    alignItems: 'center',
    justifyContent: 'center',
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
  profileInfoSection: {
    flex: 1,
    marginBottom: 50,
  },
  profileInfoItem: {
    flexDirection: 'row',
    borderBottomColor: '#c3c3c3',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 15,
  },
  labelText: {
    flex: 1,
    color: '#c3c3c3',
  },
  valueText: {
    flex: 2,
    fontWeight: 'bold',
    textAlign: 'right',
  }
});
