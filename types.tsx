/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  Appointment: {screen: any};
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabSearch: undefined;
  TabAppointment: undefined;
  TabMessage: undefined;
  TabProfile: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabSearchParamList = {
  TabSearchScreen: undefined;
};

export type TabAppointmentParamList = {
  TabAppointmentScreen: undefined;
  AppointmentDetail: {screen: any};
  NotFound: undefined;
};

export type TabMessageParamList = {
  TabMessageScreen: undefined;
};

export type TabProfileParamList = {
  TabProfileScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
