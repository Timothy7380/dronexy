import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Lato_400Regular, Lato_700Bold, Lato_900Black } from '@expo-google-fonts/lato';

import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import GetStartedScreen from './src/screens/GetStartedScreen';
import SignUpAsScreen from './src/screens/SignUpAsScreen';
import SignUpClientScreen from './src/screens/SignUpClientScreen';
import SignUpPilotScreen from './src/screens/SignUpPilotScreen';
import UploadDocumentsScreen from './src/screens/UploadDocumentsScreen';
import OtpScreen from './src/screens/OtpScreen';
import OtpVerifiedScreen from './src/screens/OtpVerifiedScreen';
import SignInScreen from './src/screens/SignInScreen';
import EnableLocationScreen from './src/screens/EnableLocationScreen';
import HomeScreen from './src/screens/HomeScreen';
import MissionsScreen from './src/screens/MissionsScreen';
import TrackerScreen from './src/screens/TrackerScreen';
import PaymentsScreen from './src/screens/PaymentsScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import ReportsScreen from './src/screens/ReportsScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AccountSettingsScreen from './src/screens/AccountSettingsScreen';
import PersonalInformationScreen from './src/screens/PersonalInformationScreen';
import IdentityVerificationScreen from './src/screens/IdentityVerificationScreen';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen';
import PaymentMethodsScreen from './src/screens/PaymentMethodsScreen';
import AddPaymentMethodScreen from './src/screens/AddPaymentMethodScreen';
import PilotHomeScreen from './src/screens/PilotHomeScreen';
import PilotMissionsScreen from './src/screens/PilotMissionsScreen';
import PilotTrackerScreen from './src/screens/PilotTrackerScreen';
import EarningsScreen from './src/screens/EarningsScreen';
import PerformanceScreen from './src/screens/PerformanceScreen';
import AvailabilityScreen from './src/screens/AvailabilityScreen';
import MissionWorkspaceScreen from './src/screens/MissionWorkspaceScreen';
import MissionOfferScreen from './src/screens/MissionOfferScreen';
import MissionReportScreen from './src/screens/MissionReportScreen';
import UploadCredentialsScreen from './src/screens/UploadCredentialsScreen';
import PilotMessagesScreen from './src/screens/PilotMessagesScreen';
import PilotNotificationsScreen from './src/screens/PilotNotificationsScreen';
import PilotProfileScreen from './src/screens/PilotProfileScreen';

const Stack = createNativeStackNavigator();

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#0D0D0D',
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({ Lato_400Regular, Lato_700Bold, Lato_900Black });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: '#0D0D0D', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color="#FFFFFF" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <StatusBar style="light" />
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="GetStarted" component={GetStartedScreen} />
          <Stack.Screen name="SignUpAs" component={SignUpAsScreen} />
          <Stack.Screen name="SignUpClient" component={SignUpClientScreen} />
          <Stack.Screen name="SignUpPilot" component={SignUpPilotScreen} />
          <Stack.Screen name="UploadDocuments" component={UploadDocumentsScreen} />
          <Stack.Screen name="Otp" component={OtpScreen} />
          <Stack.Screen name="OtpVerified" component={OtpVerifiedScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="EnableLocation" component={EnableLocationScreen} />
          <Stack.Screen name="Main" component={HomeScreen} />
          <Stack.Screen name="Missions" component={MissionsScreen} />
          <Stack.Screen name="Tracker" component={TrackerScreen} />
          <Stack.Screen name="Payments" component={PaymentsScreen} />
          <Stack.Screen name="Activity" component={ActivityScreen} />
          <Stack.Screen name="Messages" component={MessagesScreen} />
          <Stack.Screen name="Reports" component={ReportsScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="AccountSettings" component={AccountSettingsScreen} />
          <Stack.Screen name="PersonalInformation" component={PersonalInformationScreen} />
          <Stack.Screen name="IdentityVerification" component={IdentityVerificationScreen} />
          <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
          <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
          <Stack.Screen name="AddPaymentMethod" component={AddPaymentMethodScreen} />
          <Stack.Screen name="PilotMain" component={PilotHomeScreen} />
          <Stack.Screen name="PilotMissions" component={PilotMissionsScreen} />
          <Stack.Screen name="PilotTracker" component={PilotTrackerScreen} />
          <Stack.Screen name="Earnings" component={EarningsScreen} />
          <Stack.Screen name="Performance" component={PerformanceScreen} />
          <Stack.Screen name="Availability" component={AvailabilityScreen} />
          <Stack.Screen name="MissionWorkspace" component={MissionWorkspaceScreen} />
          <Stack.Screen name="MissionOffer" component={MissionOfferScreen} />
          <Stack.Screen name="MissionReport" component={MissionReportScreen} />
          <Stack.Screen name="UploadCredentials" component={UploadCredentialsScreen} />
          <Stack.Screen name="PilotMessages" component={PilotMessagesScreen} />
          <Stack.Screen name="PilotNotifications" component={PilotNotificationsScreen} />
          <Stack.Screen name="PilotProfile" component={PilotProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
