import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../Context/Auth';

export default function Home() {
  const navigation = useNavigation();
  const { singIn } = useAuth();

  const handleSubmit = async () => {
    // const regTemp = {email, password};
    // setIsLoading(true)
    const dadosTest =  {
      token: '1234567890',
      name: 'Ian Hadrien'
    }
    try {
      // const { data } = await api.post("/login", regTemp);
      await singIn(dadosTest);
      console.log('JSON.stringify(data)');
    } catch (error) {
      console.log(error);
      // setIsLoading(false)
    }
  };


  return (
    <View className="items-center justify-center p-6 bg-azul-200" style={{ flex: 1 }}>
      <View className="w-full items-center justify-center" style={{ flex: 1 }}>
        <Text className="text-white font-bold text-7xl text-center">OKR</Text>
      </View>

      <View className="w-full">
        <Text className="text-center text-2xl text-white">A new way to define</Text>
        <Text className="text-center font-bold text-2xl text-white">Goals</Text>
      </View>

      <View className="w-full justify-center" style={{ flex: 1 }}>
        <TouchableOpacity 
          className="flex items-center p-3 mt-4 bg-azul-300 border-2 border-azul-300 rounded-lg"
          onPress={() => navigation.navigate("screenC")}>
          <Text className="text-1xl text-white font-bold">Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex items-center p-3 mt-4 mb-9 bg-azul-200 border-2 border-white rounded-lg"
          onPress={() => navigation.navigate("screenB")}
          >
          <Text className="text-1xl text-white font-bold">Log In</Text>
        </TouchableOpacity>

        <Text className="text-white text-center font-bold text-xs">By signing op, ypu agree to out terms of service</Text>
        <Text className="text-white text-center font-bold text-xs">and Privacy Policy</Text>
      </View>
    </View>
  );
}