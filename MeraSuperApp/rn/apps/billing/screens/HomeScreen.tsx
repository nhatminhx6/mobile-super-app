import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import Screen from '../../../shared/Screen';
import {BillingStackParamList} from '../BillingApp';

const HomeScreen = ({navigation, route}: NativeStackScreenProps<BillingStackParamList, 'BillingHome'>) => {
  const initialProps = route.params?.initialProps;

  return (
    <Screen title="Billing Home">
      <View style={styles.section}>
        <Text style={styles.label}>Initial Props</Text>
        <Text style={styles.value}>{JSON.stringify(initialProps ?? {}, null, 2)}</Text>
      </View>

      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={() => navigation.navigate('BillingDetail', {invoiceId: 'INV-7788'})}
      >
        <Text style={styles.buttonText}>Open Invoice Detail</Text>
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
    backgroundColor: '#FBBF24',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: '#0F172A',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default HomeScreen;
