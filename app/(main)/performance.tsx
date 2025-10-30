import { Text } from '@/components/ui/Text';
import React from 'react';
import { View } from 'react-native';

export default function PerformanceScreen() {
    return (
        <View className="flex-1 justify-center items-center p-5">
            <Text className="text-2xl font-bold text-neutral-900 mb-2.5">Performance</Text>
            <Text className="text-base text-green-500 text-center">Monitor your performance</Text>
        </View>
    );
}
