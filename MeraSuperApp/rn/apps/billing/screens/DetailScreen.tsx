import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';

import Screen from '../../../shared/Screen';
import {BillingStackParamList} from '../BillingApp';

const DetailScreen = ({route}: NativeStackScreenProps<BillingStackParamList, 'BillingDetail'>) => {
  return (
    <Screen title="Invoice Detail">
      <View style={styles.card}>
        <Text style={styles.label}>Invoice</Text>
        <Text style={styles.value}>{route.params.invoiceId}</Text>
        <Text style={styles.body}>
          Billing detail view powered by the Billing mini-app navigation stack.
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 12,
  },
  label: {
    color: '#FDE68A',
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
    color: '#E2E8F0',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default DetailScreen;
