import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BookingHomeScreen from './screens/HomeScreen';
import BookingDetailScreen from './screens/DetailScreen';
import {MiniAppInitialProps} from '../../shared/types';

export type BookingStackParamList = {
  BookingHome: {initialProps?: MiniAppInitialProps} | undefined;
  BookingDetail: {bookingId: string};
};

type BookingAppProps = MiniAppInitialProps;

const Stack = createNativeStackNavigator<BookingStackParamList>();

const BookingApp = (props: BookingAppProps) => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name="BookingHome"
          component={BookingHomeScreen}
          options={{title: 'Booking'}}
          initialParams={{initialProps: props}}
        />
        <Stack.Screen
          name="BookingDetail"
          component={BookingDetailScreen}
          options={{title: 'Booking Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BookingApp;
