/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabSearchScreen from '../screens/TabSearch/TabSearchScreen';
import TabAppointmentScreen from '../screens/TabAppointment/TabAppointmentScreen';
import TabMessageScreen from '../screens/TabMessage/TabMessageScreen';
import TabProfileScreen from '../screens/TabProfile/TabProfileScreen';
import { BottomTabParamList, TabSearchParamList, TabAppointmentParamList, TabMessageParamList, TabProfileParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabSearch"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabSearch"
        component={TabSearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabAppointment"
        component={TabAppointmentNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabMessage"
        component={TabMessageNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="chatbubble-ellipses-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabProfile"
        component={TabProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

// Tab Search
const TabSearchStack = createStackNavigator<TabSearchParamList>();

function TabSearchNavigator() {
  return (
    <TabSearchStack.Navigator>
      <TabSearchStack.Screen
        name="TabSearchScreen"
        component={TabSearchScreen}
        options={{ headerTitle: 'Search' }}
      />
    </TabSearchStack.Navigator>
  );
}

// Tab Appointment
const TabAppointmentStack = createStackNavigator<TabAppointmentParamList>();

function TabAppointmentNavigator() {
  return (
    <TabAppointmentStack.Navigator>
      <TabAppointmentStack.Screen
        name="TabAppointmentScreen"
        component={TabAppointmentScreen}
        options={{ headerTitle: 'Appointment' }}
      />
    </TabAppointmentStack.Navigator>
  );
}

// Tab Message
const TabMessageStack = createStackNavigator<TabMessageParamList>();

function TabMessageNavigator() {
  return (
    <TabMessageStack.Navigator>
      <TabMessageStack.Screen
        name="TabMessageScreen"
        component={TabMessageScreen}
        options={{ headerTitle: 'Message' }}
      />
    </TabMessageStack.Navigator>
  );
}

//
const TabProfileStack = createStackNavigator<TabProfileParamList>();

function TabProfileNavigator() {
  return (
    <TabProfileStack.Navigator>
      <TabProfileStack.Screen
        name="TabProfileScreen"
        component={TabProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </TabProfileStack.Navigator>
  );
}
