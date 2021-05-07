import * as React from 'react';
import { StyleSheet } from 'react-native';

import { ScrollView, TouchableOpacity, Image, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, AuthParamList } from '../types';

export default function UserSignUpScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.logoImageSection}>
          <View style={styles.logoImageWrapper}>
            <Image style={styles.logoImage} source={require('../../assets/images/icon.png')} />
          </View>
        </View>
        <View style={styles.formSection}>
          <View style={styles.formGroup}>
            <Text style={styles.labelText}>Full Name</Text>
            <TextInput style={styles.inputText} />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.labelText}>Email</Text>
            <TextInput style={styles.inputText} />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.labelText}>Password</Text>
            <TextInput style={styles.inputText} />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.labelText}>Password Confirmation</Text>
            <TextInput style={styles.inputText} />
          </View>
          <View style={styles.formGroup}>
            <TouchableOpacity style={styles.signButton}
              onPress={() => navigation.replace('Root', {screen: 'TabProfileScreen'})}
            >
              <Text style={styles.buttonColor}>Sign Up</Text>
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
  signButton: {
    height: 40,
    marginTop: 20,
    backgroundColor: 'red',
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonColor: {
    color: '#fff',
  }
});
