import { useAuth } from '@/contexts/authContext';
import {
  Box,
  Button,
  ButtonText,
  HStack,
  Image,
  Input,
  InputField,
  Text,
} from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const { login } = useAuth();

  return (
    <Box
      flex={1}
      justifyContent="space-between"
      paddingVertical={20}
      paddingTop={50}
      backgroundColor="#202024"
    >
      <Image
        source={require('@/assets/nielBg.png')}
        size="full"
        opacity={0.3}
        position="absolute"
      />

      <Box
        height={100}
        width={'$full'}
        alignItems="center"
        justifyContent="center"
      >
        <HStack alignItems="center">
          <Image source={require('@/assets/logo.png')} height={50} width={50} />
          <Text fontWeight={'bold'} fontSize={'$2xl'} color="white">
            Mestre Niel
          </Text>
        </HStack>
        <Text fontWeight={'$light'} fontSize={'$md'} color="white">
          Conteúdo focado no seu desenvolvimento
        </Text>
      </Box>

      <Box width={'90%'} marginHorizontal={'auto'} gap={10}>
        <Text textAlign="center" fontWeight={'bold'} color="white">
          Acesse sua conta
        </Text>
        <Input height={50}>
          <InputField
            color="white"
            placeholder="E-mail"
            onChangeText={setEmail}
            value={email}
          />
        </Input>
        <Input height={50}>
          <InputField
            color="white"
            placeholder="Senha"
            onChangeText={setPassword}
            value={password}
          />
        </Input>
        <Button
          height={50}
          onPress={() => login(email, password)}
          backgroundColor="#E42727"
        >
          <ButtonText>Acessar</ButtonText>
        </Button>
      </Box>

      <Box width={'90%'} marginHorizontal={'auto'} gap={10}>
        <Text
          textAlign="center"
          fontWeight={'$light'}
          fontSize={'$sm'}
          color="white"
        >
          Saiba mais sobre meu projeto.
        </Text>
        <Button
          onPress={() => router.replace('/about')}
          backgroundColor="transparent"
          borderWidth={1}
          borderColor="#E42727"
        >
          <ButtonText color="#E42727">Acessar</ButtonText>
        </Button>
      </Box>
    </Box>
  );
}
