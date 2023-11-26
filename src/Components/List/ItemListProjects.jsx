import { useNavigation } from '@react-navigation/native';
import moment from 'moment/moment';
import React, { memo } from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';

export const ItemListProjects =  memo(({ item }) => { 
  const navigation = useNavigation();
  console.log("Item: ", item);

  return (
    <View className="border-2 mt-6 p-2 rounded-md">
      <TouchableOpacity onPress={() => navigation.navigate('Project')}>
        <View className="flex-row items-center justify-between pb-3">
          <Text className="p-1 rounded-lg bg-gray-400 text-white">
            in progress
          </Text>
          <Text>{moment(item?.created_at).format('DD/MM/YYYY')}</Text>
        </View>
        
        <View className="pb-2">
          <Text className="text-2xl">{item?.name}</Text>
        </View>

        <View className="border-t border-gray-400" />

        <View className="flex-row items-center justify-between py-3">
          <Text className="p-1 text-gray-400">Pessoas: <Text className="font-bold text-black">{item?.users.length}</Text></Text>
          <View className="flex-row items-center">
            <Text className="pr-2">Manager</Text>
            <View className="bg-gray-400 h-5 w-5 rounded-full" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
})
