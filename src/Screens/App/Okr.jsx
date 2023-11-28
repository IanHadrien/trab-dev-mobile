import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import api from '../../Services/api';

export default function Okr({ route }) {
  const id = route.params.id;
  const navigation = useNavigation();
  const [project_id, SetProjectid] = useState(route.params.id);
  const [objective, setObjective] = useState('');
  const [kr_one, setKrOne] = useState('');
  const [kr_two, setKrTwo] = useState('');
  const [kr_three, setKrThree] = useState('');
  const [kr_four, setKrFour] = useState('');
  const [kr_five, setKrFive] = useState('');

  const handleSubmit = async () => {
    console.log('handleSubmit');
    try {
      const regTemp = {objective, project_id, kr_five, kr_one, kr_two, kr_three, kr_four};
      const { data } = await api.post("/okr", regTemp);
      console.log("Recebidos okr: ", regTemp);
      navigation.navigate('Project', {id: id});
      // navigation.navigate('My-Project');
    } catch (error) {
      console.log(error);
    } finally {
      // setIsLoading(false)
    }
  };

  return (
    <ScrollView className="bg-white h-full">
      <View className="p-6">
        <View className="flex-row justify-between pb-1">
          <Text className="text-black text-2xl font-bold">Criar OKR</Text>
        </View>
      </View>

      <View className="rounded-t-3xl bg-gray-200 p-6">
        <Text className="pb-3 text-gray-500">Obejetivo</Text>
        <TextInput 
          className="bg-white border p-1 rounded-md"
          placeholder="Obejetivo" 
          onChangeText={setObjective}
          value={objective}
        />

        <View className="rounded-t-3xl pt-4">
          <Text className="pb-3 text-gray-500">kr_one</Text>
          <TextInput 
            className="bg-white border p-1 rounded-md"
            placeholder="kr_one" 
            onChangeText={setKrOne}
            value={kr_one}
          />
        </View>

        <View className="rounded-t-3xl pt-4">
          <Text className="pb-3 text-gray-500">kr_two</Text>
          <TextInput 
            className="bg-white border p-1 rounded-md"
            placeholder="kr_two" 
            onChangeText={setKrTwo}
            value={kr_two}
          />
        </View>
        <View className="rounded-t-3xl pt-4">
          <Text className="pb-3 text-gray-500">kr_three</Text>
          <TextInput 
            className="bg-white border p-1 rounded-md"
            placeholder="kr_three" 
            onChangeText={setKrThree}
            value={kr_three}
          />
        </View>
        <View className="rounded-t-3xl pt-4">
          <Text className="pb-3 text-gray-500">kr_four</Text>
          <TextInput 
            className="bg-white border p-1 rounded-md"
            placeholder="kr_four" 
            onChangeText={setKrFour}
            value={kr_four}
          />
        </View>
        <View className="rounded-t-3xl pt-4">
          <Text className="pb-3 text-gray-500">kr_five</Text>
          <TextInput 
            className="bg-white border p-1 rounded-md"
            placeholder="kr_five" 
            onChangeText={setKrFive}
            value={kr_five}
          />
        </View>

        <View className="flex-row justify-between py-6">
          <TouchableOpacity 
            className="w-1/2 flex items-center p-3 mt-4 bg-white border rounded-lg mr-1"
            onPress={() => navigation.navigate('Project', {id: id})}
            >
            <Text className="text-1xl text-black font-bold">Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="w-1/2 flex items-center p-3 mt-4 bg-black border rounded-lg ml-1"
            onPress={handleSubmit}
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