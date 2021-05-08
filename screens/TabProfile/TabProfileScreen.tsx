import * as React from 'react';
import { StyleSheet } from 'react-native';

import { ScrollView, TouchableOpacity, Image, TextInput, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, AuthParamList } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';
import { appKey } from '../../utils/env';
import { SpinerOverlay } from '../../components/SpinerOverlay';

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

export default function TabProfileScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {

  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    fullname: '',
    email: '',
    phone: '',
    location: '',
    specialties: ''
  });

  const [updateUser, setUpdateUser] = React.useState({
    fullname: '',
    email: '',
    phone: '',
    location: '',
    specialties: ''
  });
  
  const [editMode, setEditMode] = React.useState(false);

  React.useEffect(() => {
    checkSessionUser();
  }, []);

  const checkSessionUser = async () => {
    try {
      const sessionUser = await AsyncStorage.getItem(appKey.sessionUser);
      if(sessionUser) {
        setUser(JSON.parse(sessionUser));
        setUpdateUser(JSON.parse(sessionUser));
      }
    } catch(e) {
      throw e;
    }
  }

  const logout = () => {
    AsyncStorage.clear();
    navigation.replace('Auth', {screen: 'AuthScreen'})
  }

  const toggleEdit = () => {
    setEditMode(!editMode);
  }

  const updateProfile = () => {
    setLoading(true);
    api.updateDoctorProfile({updateUser})
      .then((res: any) => {
        console.log('res: ', res);
        if(res.status === 200) {
          try {
            api.setSession(res.data);
          } catch (e) {
            throw e;
          }
        }
        checkSessionUser();
        toggleEdit();
        setLoading(false);
      })
      .catch(err => {
        console.log('err: ', err);
        setLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <SpinerOverlay visible={loading} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileImageSection}>
          <TouchableOpacity style={styles.logoutButton}
            onPress={() => logout()}
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
          <View style={styles.profileImageWrapper}>
            <Image style={styles.profileImage} source={user.img} />
            <TouchableOpacity style={styles.profileImageButton}>
              <Ionicons name="ios-camera" size={22} color="white" />
            </TouchableOpacity>
          </View>
          {editMode 
          ? <View style={styles.saveButtonWrapper}>
              <TouchableOpacity style={styles.saveButton}
                onPress={() => updateProfile()}
              >
                <Text style={styles.logoutButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton}
                onPress={() => {setUpdateUser(user);toggleEdit();}}
              >
                <Text style={styles.logoutButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          : <TouchableOpacity style={styles.editButton}
              onPress={() => toggleEdit()}
            >
              <Text style={styles.logoutButtonText}>Edit Profile</Text>
            </TouchableOpacity>}
        </View>
        <View style={styles.profileInfoSection}>
          <View style={[styles.profileInfoItem, editMode && {paddingVertical: 5}]}>
            <Text style={styles.labelText}>Full Name</Text>
            {editMode 
            ? <TextInput style={styles.inputText} 
                onChangeText={text => setUpdateUser({...updateUser, fullname: text})}
                value={updateUser.fullname}
              /> 
            : <Text style={styles.valueText}>{user.fullname}</Text>}
          </View>
          <View style={[styles.profileInfoItem, editMode && {paddingVertical: 5}]}>
            <Text style={styles.labelText}>Email</Text>
            {editMode 
            ? <TextInput style={styles.inputText} 
                onChangeText={text => setUpdateUser({...updateUser, email: text})}
                value={updateUser.email}
              /> 
            : <Text style={styles.valueText}>{user.email}</Text>}
          </View>
          <View style={[styles.profileInfoItem, editMode && {paddingVertical: 5}]}>
            <Text style={styles.labelText}>Phone</Text>
            {editMode 
            ? <TextInput style={styles.inputText} 
                onChangeText={text => setUpdateUser({...updateUser, phone: text})}
                value={updateUser.phone}
              /> 
            : <Text style={styles.valueText}>{user.phone}</Text>}
          </View>
          <View style={[styles.profileInfoItem, editMode && {paddingVertical: 5}]}>
            <Text style={styles.labelText}>Location</Text>
            {editMode 
            ? <TextInput style={styles.inputText} 
                onChangeText={text => setUpdateUser({...updateUser, location: text})}
                value={updateUser.location}
              /> 
            : <Text style={styles.valueText}>{user.location}</Text>}
          </View>
          <View style={[styles.profileInfoItem, editMode && {paddingVertical: 5}]}>
            <Text style={styles.labelText}>Specialties</Text>
            {editMode 
            ? <TextInput style={styles.inputText} 
                onChangeText={text => setUpdateUser({...updateUser, specialties: text})}
                value={updateUser.specialties}
              /> 
            : <Text style={styles.valueText}>{user.specialties}</Text>}
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
  inputText: {
    flex: 2,
    fontWeight: 'bold',
    textAlign: 'left',
    borderWidth: 1,
    borderColor: '#c3c3c3',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  valueText: {
    flex: 2,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  logoutButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  logoutButtonText: {
    color: '#3698d5',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  saveButtonWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
  },
  saveButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  cancelButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  }
});
