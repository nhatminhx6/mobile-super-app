import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BillingHomeScreen from './screens/HomeScreen';
import BillingDetailScreen from './screens/DetailScreen';
import {MiniAppInitialProps} from '../../shared/types';

export type BillingStackParamList = {
  BillingHome: {initialProps?: MiniAppInitialProps} | undefined;
  BillingDetail: {invoiceId: string};
};

type BillingAppProps = MiniAppInitialProps;

const Stack = createNativeStackNavigator<BillingStackParamList>();

const BillingApp = (props: BillingAppProps) => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name="BillingHome"
          component={BillingHomeScreen}
          options={{title: 'Billing'}}
          initialParams={{initialProps: props}}
        />
        <Stack.Screen
          name="BillingDetail"
          component={BillingDetailScreen}
          options={{title: 'Invoice Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BillingApp;
