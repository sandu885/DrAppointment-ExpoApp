import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { BottomTabParamList, TabSearchParamList, TabAppointmentParamList, TabMessageParamList, TabProfileParamList } from '../types';
import AppointmentDetailScreen from '../screens/TabAppointment/AppointmentDetailScreen';

const Stack = createStackNavigator<TabAppointmentParamList>();

export default function TabAppointmentNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppointmentDetail" component={AppointmentDetailScreen} />
    </Stack.Navigator>
  );
}