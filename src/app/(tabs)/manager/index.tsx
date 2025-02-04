import { StudentCard } from '@/components/StudentCard';
import students from '@/utils/studentsMock';
import { Box, ScrollView, VStack } from '@gluestack-ui/themed';
import React from 'react';

export default function manager() {
  return (
    <Box flex={1} backgroundColor="#121214" padding={20}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="lg">
          {students.map((student) => (
            <StudentCard {...student} />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
}
