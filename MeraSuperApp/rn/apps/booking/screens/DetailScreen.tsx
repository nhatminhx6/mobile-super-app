import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';

import Screen from '../../../shared/Screen';
import {BookingStackParamList} from '../BookingApp';

const DetailScreen = ({route}: NativeStackScreenProps<BookingStackParamList, 'BookingDetail'>) => {
  return (
    <Screen title="Booking Detail">
      <View style={styles.card}>
        <Text style={styles.label}>Booking ID</Text>
        <Text style={styles.value}>{route.params.bookingId}</Text>
        <Text style={styles.body}>
          This screen is rendered inside the Booking mini-app and uses its own native-stack
          navigation.
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 12,
  },
  label: {
    color: '#94A3B8',
    fontSize: 12,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  value: {
    color: '#F8FAFC',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  body: {
    color: '#CBD5F5',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default DetailScreen;
