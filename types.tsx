/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  Auth: undefined;
  Chat: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabSearch: undefined;
  TabAppointment: undefined;
  TabMessage: undefined;
  TabProfile: undefined;
};

export type AuthParamList = {
  AuthScreen: undefined;
  UserLoginScreen: undefined;
  UserSignUpScreen: undefined;
  DoctorLoginScreen: undefined;
  DoctorSignUpScreen: undefined;
  NotFound: undefined;
};

export type TabSearchParamList = {
  TabSearchScreen: undefined;
  DoctorDetailScreen: {screen: any};
  NotFound: undefined;
};

export type TabAppointmentParamList = {
  TabAppointmentScreen: undefined;
  AppointmentDetailScreen: {screen: any};
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
