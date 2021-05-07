import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, AuthParamList } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';
import { appKey } from '../../utils/env';

export default function AuthScreen({
  navigation,
}: StackScreenProps<AuthParamList, 'NotFound'>) {
  
  React.useEffect( () => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const _isLoggedIn = await AsyncStorage.getItem(appKey.isLoggedIn);
      if(_isLoggedIn !== null && _isLoggedIn === "true") {
        console.log('async: ', _isLoggedIn);
        navigation.replace('Root', {screen: 'TabSearchScreen'})
      } else {
        
      }
    } catch(e) {
      throw e;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoImageSection}>
        <View style={styles.logoImageWrapper}>
          <Image style={styles.logoImage} source={require('../../assets/images/icon.png')} />
        </View>
      </View>
      <View style={styles.authButtonSection}>
        <TouchableOpacity style={styles.userAuthButton}
          onPress={() => navigation.navigate('UserLoginScreen', {screen: 'UserLoginScreen'})}
        >
          <Text style={styles.buttonText}>Login as a User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doctorAuthButton}
          onPress={() => navigation.navigate('UserSignUpScreen', {screen: 'UserSignUpScreen'})}
        >
          <Text style={styles.buttonText}>Sign Up as a User</Text>
        </TouchableOpacity>
        <View style={{marginVertical: 10}}></View>
        <TouchableOpacity style={styles.userAuthButton}
          onPress={() => navigation.navigate('DoctorLoginScreen', {screen: 'DoctorLoginScreen'})}
        >
          <Text style={styles.buttonText}>Login as a Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doctorAuthButton}
          onPress={() => navigation.navigate('DoctorSignUpScreen', {screen: 'DoctorSignUpScreen'})}
        >
          <Text style={styles.buttonText}>Sign Up as a Doctor</Text>
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
  scrollView: {
    flex: 1,
  },
  logoImageSection: {
    flex: 1,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImageWrapper: {
    width: 120,
    height: 120, 
  },
  logoImage: {
    width: 120,
    height: 120, 
    borderRadius: 60,
    marginRight: 15,
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
  authButtonSection: {
    flex: 1,
    marginBottom: 50,
  },
  userAuthButton: {
    backgroundColor: 'blue',
    marginHorizontal: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
  },
  doctorAuthButton: {
    backgroundColor: 'red',
    marginHorizontal: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
  }
});
