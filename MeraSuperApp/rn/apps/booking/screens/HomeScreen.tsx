import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import Screen from '../../../shared/Screen';
import {BookingStackParamList} from '../BookingApp';

const HomeScreen = ({navigation, route}: NativeStackScreenProps<BookingStackParamList, 'BookingHome'>) => {
  const initialProps = route.params?.initialProps;

  return (
    <Screen title="Booking Home">
      <View style={styles.section}>
        <Text style={styles.label}>Initial Props</Text>
        <Text style={styles.value}>{JSON.stringify(initialProps ?? {}, null, 2)}</Text>
      </View>

      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={() => navigation.navigate('BookingDetail', {bookingId: 'BK-1024'})}
      >
        <Text style={styles.buttonText}>Open Booking Detail</Text>
      </Pressable>
    </Screen>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 16,
  },
  label: {
    color: '#94A3B8',
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
    backgroundColor: '#38BDF8',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#0F172A',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default HomeScreen;
