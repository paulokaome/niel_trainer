import { useAuth } from '@/contexts/authContext';
import { MaterialIcons } from '@expo/vector-icons';
import { Box, Image, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function Header() {
  const { logout } = useAuth();

  return (
    <Box
      height={120}
      width={'$full'}
      backgroundColor="#202024"
      flexDirection="row"
      paddingVertical={10}
      paddingHorizontal={20}
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Box
        gap={10}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Image source={require('@/assets/avatar.png')} height={60} width={60} />
        <VStack>
          <Text fontWeight={'$normal'} fontSize={'$lg'} color="white">
            Olá,
          </Text>
          <Text fontWeight={'bold'} fontSize={'$lg'} color="white">
            Mestre Niel
          </Text>
        </VStack>
      </Box>
      <TouchableOpacity
        onPress={logout}
        style={{
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}
      >
        <MaterialIcons name="logout" size={24} color="white" />
      </TouchableOpacity>
    </Box>
  );
}
