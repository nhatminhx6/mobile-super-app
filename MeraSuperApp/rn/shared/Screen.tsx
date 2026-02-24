import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

type ScreenProps = {
  title: string;
  children?: React.ReactNode;
};

const Screen = ({title, children}: ScreenProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.content}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#E2E8F0',
    marginBottom: 16,
  },
  content: {
    flex: 1,
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 16,
  },
});

export default Screen;
