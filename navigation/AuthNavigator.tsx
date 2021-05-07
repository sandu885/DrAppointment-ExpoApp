import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { RootStackParamList, BottomTabParamList, TabSearchParamList, TabAppointmentParamList, TabMessageParamList, TabProfileParamList } from '../types';
import AuthScreen from '../screens/Auth/AuthScreen';
import UserLoginScreen from '../screens/Auth/UserLoginScreen';
import UserSignUpScreen from '../screens/Auth/UserSignUpScreen';
import DoctorLoginScreen from '../screens/Auth/DoctorLoginScreen';
import DoctorSignUpScreen from '../screens/Auth/DoctorSignUpScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function AuthNavigator() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen 
        name="AuthScreen" 
        component={AuthScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="UserLoginScreen" 
        component={UserLoginScreen} 
        options={{ headerTitle: 'Login as a User' }} 
      />
      <Stack.Screen 
        name="UserSignUpScreen" 
        component={UserSignUpScreen} 
        options={{ headerTitle: 'Sign Up as a User' }} 
      />
      <Stack.Screen 
        name="DoctorLoginScreen" 
        component={DoctorLoginScreen} 
        options={{ headerTitle: 'Login as a Doctor' }} 
      />
      <Stack.Screen 
        name="DoctorSignUpScreen" 
        component={DoctorSignUpScreen} 
        options={{ headerTitle: 'Sign Up as a Doctor' }} 
      />
    </Stack.Navigator>
  );
}