import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SheetIndex from './BottomSheets';
import IndexChart from './Charts/IndexChart';
import ModalIndex from './Modals/ModalIndex';
import OnboardingIndex from './Screens/Index';
import OnboardingScreen from './Screens/OnboardingScreen';
import Orders from './Screens/Orders';
import OrderNavigate from './Screens/OrderNavigate';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Onboarding" component={OnboardingIndex} />
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="My Orders" component={Orders} />
          <Stack.Screen name="navigate order" component={OrderNavigate} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

    // <GestureHandlerRootView style={{flex: 1}}>
    //   <View style={{flex: 1}}>
    //     {/* <SheetIndex /> */}
    //     {/* <IndexChart /> */}
    //     <ModalIndex />
    //   </View>

    //   {/* <ListingForm /> */}
    // </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
