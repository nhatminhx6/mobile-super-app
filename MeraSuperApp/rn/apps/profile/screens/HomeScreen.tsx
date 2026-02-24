import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import Screen from '../../../shared/Screen';
import {ProfileStackParamList} from '../ProfileApp';

const HomeScreen = ({navigation, route}: NativeStackScreenProps<ProfileStackParamList, 'ProfileHome'>) => {
  const initialProps = route.params?.initialProps;

  return (
    <Screen title="Profile Home">
      <View style={styles.section}>
        <Text style={styles.label}>Initial Props</Text>
        <Text style={styles.value}>{JSON.stringify(initialProps ?? {}, null, 2)}</Text>
      </View>

      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={() => navigation.navigate('ProfileDetail', {profileId: 'USR-2024'})}
      >
        <Text style={styles.buttonText}>Open Profile Detail</Text>
      </Pressable>
    </Screen>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 16,
  },
  label: {
    color: '#A7F3D0',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    marginBottom: 6,
  },
  value: {
    color: '#F8FAFC',
    fontSize: 14,
    fontFamily: 'Courier',
  },
  button: {
    backgroundColor: '#34D399',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: '#052E16',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default HomeScreen;
