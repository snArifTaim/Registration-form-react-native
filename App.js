import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegistrationForm from './components/RegistrationForm';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <RegistrationForm />
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0eafc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


