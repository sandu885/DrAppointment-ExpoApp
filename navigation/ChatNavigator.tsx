import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { RootStackParamList, BottomTabParamList, TabSearchParamList, TabAppointmentParamList, TabMessageParamList, TabProfileParamList } from '../types';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function ChatNavigator() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen 
        name="ChatScreen" 
        component={ChatScreen} 
        options={{ headerTitle: 'Message' }} 
      />
    </Stack.Navigator>
  );
}