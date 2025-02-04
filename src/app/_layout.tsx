import { AuthProvider } from '@/contexts/authContext';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Stack } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#121214' }}>
      <GluestackUIProvider config={config}>
        <AuthProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              statusBarTranslucent: true,
              statusBarBackgroundColor: 'transparent',
            }}
          >
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="login" />
            <Stack.Screen name="about" />
          </Stack>
        </AuthProvider>
      </GluestackUIProvider>
    </View>
  );
}
