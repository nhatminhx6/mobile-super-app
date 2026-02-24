import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileHomeScreen from './screens/HomeScreen';
import ProfileDetailScreen from './screens/DetailScreen';
import {MiniAppInitialProps} from '../../shared/types';

export type ProfileStackParamList = {
  ProfileHome: {initialProps?: MiniAppInitialProps} | undefined;
  ProfileDetail: {profileId: string};
};

type ProfileAppProps = MiniAppInitialProps;

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileApp = (props: ProfileAppProps) => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name="ProfileHome"
          component={ProfileHomeScreen}
          options={{title: 'Profile'}}
          initialParams={{initialProps: props}}
        />
        <Stack.Screen
          name="ProfileDetail"
          component={ProfileDetailScreen}
          options={{title: 'Profile Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProfileApp;
