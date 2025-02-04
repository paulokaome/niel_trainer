import Header from '@/components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#202024',
          height: 100,
          borderColor: 'transparent',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
        },
        tabBarItemStyle: {
          maxHeight: 50,
          margin: 'auto',
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          headerShown: true,
          tabBarIcon: () => (
            <MaterialIcons name="home" size={32} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          headerShown: true,
          tabBarIcon: () => (
            <MaterialIcons name="manage-accounts" size={32} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="manager/index"
        options={{
          headerShown: true,
          tabBarIcon: () => (
            <MaterialIcons name="settings" size={32} color="white" />
          ),
        }}
      />
    </Tabs>
  );
}
