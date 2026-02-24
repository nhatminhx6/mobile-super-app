import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';

import Screen from '../../../shared/Screen';
import {ProfileStackParamList} from '../ProfileApp';

const DetailScreen = ({route}: NativeStackScreenProps<ProfileStackParamList, 'ProfileDetail'>) => {
  return (
    <Screen title="Profile Detail">
      <View style={styles.card}>
        <Text style={styles.label}>Profile ID</Text>
        <Text style={styles.value}>{route.params.profileId}</Text>
        <Text style={styles.body}>
          Profile detail view rendered inside the Profile mini-app stack.
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#064E3B',
    padding: 16,
    borderRadius: 12,
  },
  label: {
    color: '#D1FAE5',
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
    color: '#ECFDF5',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default DetailScreen;
