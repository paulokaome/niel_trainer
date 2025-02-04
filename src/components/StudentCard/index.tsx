import { MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Switch, Text, VStack } from '@gluestack-ui/themed';
import React, { useState } from 'react';

export type StundentCardProps = {
  studentName: string;
  studentStatus: boolean;
  courseSubscriptionDaysLeft: string;
  daysUntilExpiration: number;
};

export function StudentCard({
  studentName,
  studentStatus = false,
  courseSubscriptionDaysLeft,
  daysUntilExpiration,
}: StundentCardProps) {
  const [switchValue, setSwitchValue] = useState(studentStatus);

  return (
    <Box
      backgroundColor="#202024"
      rounded={'$md'}
      padding={10}
      borderLeftWidth={5}
      borderColor={switchValue ? '$green500' : '$red500'}
      flexDirection="row"
      justifyContent="space-between"
    >
      <VStack>
        <Text>{studentName}</Text>
        <HStack alignItems="center" space="xs">
          <MaterialIcons name="timelapse" size={18} color="white" />
          <Text>{`${courseSubscriptionDaysLeft} - ${daysUntilExpiration}`}</Text>
        </HStack>
      </VStack>

      <Switch
        size="lg"
        defaultValue={switchValue}
        value={switchValue}
        onToggle={(value) => {
          setSwitchValue(!switchValue);
        }}
      />
    </Box>
  );
}
