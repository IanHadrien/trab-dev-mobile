import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Project() {
  const [name, setName] = useState('');

  return (
    <ScrollView className="bg-white h-full">
      <View className="p-6">
        <View className="flex-row justify-between pb-1">
          <Text className="text-black text-2xl font-bold">Project</Text>
        </View>
      </View>

      <View className="rounded-xl border p-6 mx-5 mb-5">
        <Text className="pb-3 text-gray-500">Name</Text>
        <TextInput 
          className="bg-white border p-1 rounded-md"
          placeholder="Search" 
          onChangeText={setName}
          value={name}
        />

        <View className="pt-6 flex-row justify-between">
          <View className="w-1/2 pr-1">
            <Text className="pb-3 text-gray-500">Finish in</Text>
            <TextInput 
              className="bg-white border p-1 rounded-md"
              placeholder="Search" 
              onChangeText={setName}
              value={name}
            />
          </View>
          <View className="w-1/2 pl-1">
            <Text className="pb-3 text-gray-500">Type</Text>
            <TextInput 
              className="bg-white border p-1 rounded-md"
              placeholder="Search" 
              onChangeText={setName}
              value={name}
            />
          </View>
        </View>

        <View className="pt-6">
          <Text className="pb-3 text-gray-500">Name</Text>
          <TextInput 
            className="bg-white border p-1 rounded-md h-40"
            onChangeText={setName}
            value={name}
          />
        </View>

        <View className="pt-6">
          <Text className="pb-3 text-gray-500">Add People</Text>
          <View className="flex-row gap-4">
            <View className="border border-blue-700 p-2 w-12 rounded-xl">
              <AntDesign name="user" size={30} color='blue' />
            </View>
            <View className="border p-2 w-12 rounded-xl">
              <AntDesign name="user" size={30} color='black' />
            </View>
            <View className="border p-2 w-12 rounded-xl">
              <AntDesign name="user" size={30} color='black' />
            </View>
            <View className="border p-2 w-12 rounded-xl">
              <AntDesign name="user" size={30} color='black' />
            </View>
          </View>
        </View>

        <View className="flex-row justify-between py-6">
          <TouchableOpacity 
            className="w-1/2 flex items-center p-3 mt-4 bg-white border rounded-lg mr-1"
            // onPress={handleSubmit}
            >
            <Text className="text-1xl text-black font-bold">Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="w-1/2 flex items-center p-3 mt-4 bg-black border rounded-lg ml-1"
            >
            <Text className="text-1xl text-white font-bold">Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  icon: {
    marginRight: 0,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  input: {
    flex: 1,
    padding: 10,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    // backgroundColor: 'white'
  },
});