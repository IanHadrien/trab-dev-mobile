import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from '../../Services/api';

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, SetPasswordConfirm] = useState('');

  const onSubmit = async () => {
    regTemp = {
      name, email, password, password_confirmation
    };

    console.log('onSubmit', regTemp);

    try {
      const { data } = await api.post("/register", regTemp);
      console.log("Recebidos: ", data);
      navigation.navigate('screenB');

      // await singIn(data);
    } catch (error) {
      console.log(error);
      // setIsLoading(false)
    }
  };

  return (
    <View className="items-center justify-center p-6 bg-white" style={{ flex: 1 }}>
      <View className="w-full items-center justify-center" style={{ flex: 1 }}>
        <Text className="text-cinza-700 font-bold text-7xl text-center">OKR</Text>
      </View>

      <View className="w-full">
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder='Nome'
          className="border-b w-full p-2 mb-4 rounded-lg font-bold"
          placeholderTextColor="black"
        />
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder='Email'
          className="border-b w-full p-2 mb-4 rounded-lg font-bold"
          placeholderTextColor="black"
        />
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder='Senha'
          className="border-b w-full p-2 mb-4 rounded-lg font-bold"
          placeholderTextColor="black"
        />
        <TextInput
          onChangeText={SetPasswordConfirm}
          value={password_confirmation}
          placeholder='Confirma senha'
          className="border-b w-full p-2 rounded-lg font-bold"
          placeholderTextColor="black"
        />
      </View>

      <View className="w-1/2 justify-center" style={{ flex: 1 }}>
        <TouchableOpacity 
          className="flex items-center p-3 mt-4 bg-cinza-700 border rounded-lg"
          onPress={onSubmit}
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