import * as React from 'react';
import { StyleSheet } from 'react-native';

import { ScrollView, TouchableOpacity, Image, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, AuthParamList } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';
import { appKey } from '../../utils/env';
import { SpinerOverlay } from '../../components/SpinerOverlay';

export default function UserLoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {

  const [loading, setLoading] = React.useState(false);
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

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

  const login = () => {
    setLoading(true);
    api.loginUser({email, password})
      .then((res: any) => {
        console.log('res: ', res);
        if(res.status === 200) {
          try {
            // AsyncStorage.setItem(appKey.sessionUser, JSON.stringify(res.data));
            // AsyncStorage.setItem(appKey.apiToken, JSON.stringify(res.data.api_token));
            // AsyncStorage.setItem(appKey.isLoggedIn, JSON.stringify(true));
            api.setSession(res.data);
            checkLoggedIn();
          } catch (e) {
            throw e;
          }
        }
        setLoading(false);
      })
      .catch(err => {
        console.log('err: ', err);
        setLoading(false);
      })
  }

  return (
    <View style={styles.container}>
      <SpinerOverlay visible={loading} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.logoImageSection}>
          <View style={styles.logoImageWrapper}>
            <Image style={styles.logoImage} source={require('../../assets/images/icon.png')} />
          </View>
        </View>
        <View style={styles.formSection}>
          <View style={styles.formGroup}>
            <Text style={styles.labelText}>Email</Text>
            <TextInput style={styles.inputText} 
              autoCompleteType="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              maxLength={50}
              onChangeText={text => onChangeEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.labelText}>Password</Text>
            <TextInput style={styles.inputText} 
              autoCompleteType="password"
              keyboardType="default"
              textContentType="password"
              maxLength={50}
              secureTextEntry={true}
              onChangeText={text => onChangePassword(text)}
              value={password}
            />
          </View>
          <View style={styles.formGroup}>
            <TouchableOpacity style={styles.loginButton}
              onPress={() => login()}
              // onPress={() => navigation.replace('Root', {screen: 'TabSearchScreen'})}
            >
              <Text style={styles.buttonColor}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e0f7ff',
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
  formSection: {
    flex: 1,
    marginBottom: 50,
  },
  formGroup: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginHorizontal: 50,
    paddingVertical: 5,
  },
  inputText: {
    borderBottomColor: '#c3c3c3',
    borderBottomWidth: 1,
  },
  labelText: {
    flex: 1,
    color: '#c3c3c3',
  },
  valueText: {
    flex: 2,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  loginButton: {
    height: 40,
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonColor: {
    color: '#fff',
  }
});
