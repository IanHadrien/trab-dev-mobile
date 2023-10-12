import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Register() {
  const navigation = useNavigation();

  return (
    <View className="items-center justify-center p-6 bg-white" style={{ flex: 1 }}>
      <View className="w-full items-center justify-center" style={{ flex: 1 }}>
        <Text className="text-cinza-700 font-bold text-7xl text-center">OKR</Text>
      </View>

      <View className="w-full">
        <TextInput
          // onChangeText={setEmail}
          // value={email}
          placeholder='Email'
          className="border-b w-full p-2 mb-4 rounded-lg font-bold"
          placeholderTextColor="black"
        />
        <TextInput
          // onChangeText={setEmail}
          // value={email}
          placeholder='Password'
          className="border-b w-full p-2 mb-4 rounded-lg font-bold"
          placeholderTextColor="black"
        />
        <TextInput
          // onChangeText={setEmail}
          // value={email}
          placeholder='Confirm Password'
          className="border-b w-full p-2 rounded-lg font-bold"
          placeholderTextColor="black"
        />
      </View>

      <View className="w-1/2 justify-center" style={{ flex: 1 }}>
        <TouchableOpacity 
          className="flex items-center p-3 mt-4 bg-cinza-700 border rounded-lg"
          onPress={() => console.log("Login")}
          >
          <Text className="text-1xl text-white font-bold">Send</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex items-center p-3 mt-4 bg-white border rounded-lg"
          onPress={() => navigation.navigate("screenB")}>
          <Text className="text-1xl text-black font-bold">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}