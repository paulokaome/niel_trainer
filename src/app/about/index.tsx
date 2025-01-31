import { MaterialIcons } from '@expo/vector-icons';
import { Box, ScrollView, Text } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function About() {
  const router = useRouter();

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => router.replace('/login')}
        style={{
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}
      >
        <MaterialIcons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Box flex={1} padding={20}>
        <Text
          color="white"
          fontWeight={'$bold'}
          fontSize={'$2xl'}
          textAlign="center"
          mb={10}
        >
          Minha História
        </Text>
        <Text textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil hic
          aliquam quam obcaecati sunt asperiores labore repudiandae veritatis
          delectus a dolore ratione possimus, accusamus velit quos repellendus,
          adipisci eos quae.Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Nihil hic aliquam quam obcaecati sunt asperiores labore
          repudiandae veritatis delectus a dolore ratione possimus, accusamus
          velit quos repellendus, adipisci eos quae.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Nihil hic aliquam quam obcaecati sunt
          asperiores labore repudiandae veritatis delectus a dolore ratione
          possimus, accusamus velit quos repellendus, adipisci eos quae.Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Nihil hic aliquam
          quam obcaecati sunt asperiores labore repudiandae veritatis delectus a
          dolore ratione possimus, accusamus velit quos repellendus, adipisci
          eos quae.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nihil hic aliquam quam obcaecati sunt asperiores labore repudiandae
          veritatis delectus a dolore ratione possimus, accusamus velit quos
          repellendus, adipisci eos quae.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nihil hic aliquam quam obcaecati sunt asperiores
          labore repudiandae veritatis delectus a dolore ratione possimus,
          accusamus velit quos repellendus, adipisci eos quae.Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Nihil hic aliquam quam
          obcaecati sunt asperiores labore repudiandae veritatis delectus a
          dolore ratione possimus, accusamus velit quos repellendus, adipisci
          eos quae.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nihil hic aliquam quam obcaecati sunt asperiores labore repudiandae
          veritatis delectus a dolore ratione possimus, accusamus velit quos
          repellendus, adipisci eos quae.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nihil hic aliquam quam obcaecati sunt asperiores
          labore repudiandae veritatis delectus a dolore ratione possimus,
          accusamus velit quos repellendus, adipisci eos quae.Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Nihil hic aliquam quam
          obcaecati sunt asperiores labore repudiandae veritatis delectus a
          dolore ratione possimus, accusamus velit quos repellendus, adipisci
          eos quae.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nihil hic aliquam quam obcaecati sunt asperiores labore repudiandae
          veritatis delectus a dolore ratione possimus, accusamus velit quos
          repellendus, adipisci eos quae.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nihil hic aliquam quam obcaecati sunt asperiores
          labore repudiandae veritatis delectus a dolore ratione possimus,
          accusamus velit quos repellendus, adipisci eos quae.Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Nihil hic aliquam quam
          obcaecati sunt asperiores labore repudiandae veritatis delectus a
          dolore ratione possimus, accusamus velit quos repellendus, adipisci
          eos quae.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nihil hic aliquam quam obcaecati sunt asperiores labore repudiandae
          veritatis delectus a dolore ratione possimus, accusamus velit quos
          repellendus, adipisci eos quae.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nihil hic aliquam quam obcaecati sunt asperiores
          labore repudiandae veritatis delectus a dolore ratione possimus,
          accusamus velit quos repellendus, adipisci eos quae.
        </Text>
      </Box>
    </ScrollView>
  );
}
