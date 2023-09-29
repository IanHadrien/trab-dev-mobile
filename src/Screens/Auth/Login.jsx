import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../Context/Auth';

export default function Login() {
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
    <View className="h-full flex-row items-center justify-center">
      <View>
        <Text className="text-red-500">Login</Text>
        <TouchableOpacity 
          className="flex items-center p-3 mt-4 bg-blue-700 border border-transparent rounded-lg"
          onPress={handleSubmit}
          >
          <Text className="text-1xl text-white">Logar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex items-center p-3 mt-4 bg-blue-700 border border-transparent rounded-lg"
          onPress={() => navigation.navigate("screenB")}>
          <Text className="text-1xl text-black">Esqueceu a senha</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex items-center p-3 mt-4 bg-blue-700 border border-transparent rounded-lg"
          onPress={() => navigation.navigate("screenC")}>
          <Text className="text-1xl text-black">Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex items-center p-3 mt-4 bg-blue-700 border border-transparent rounded-lg"
          onPress={() => console.log("Teste")}>
          <Text className="text-1xl text-black">Teste</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}