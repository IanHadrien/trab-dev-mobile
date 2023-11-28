import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import api from '../../Services/api';
import { useNavigation } from '@react-navigation/native';

export default function Project({ route }) {
  const id = route.params.id;
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [project, setProject] = useState('');
  const [okr, setOkr] = useState(null);
  const [isOkr, setIsOkr] = useState(false);
  
  useEffect(() => {
    console.log("Projet: ", id);
    loadRegisters();
    loadOkr();
  }, [id]);

  const loadRegisters = async () => {
    // setLoading(true);
    try {
      const { data } = await api.get(`/project/${id}`);
      console.log("Projeto: ", data.data[0]);
      setProject(data.data[0]);
      // setProject(data.data);
    } catch (e) {
      console.log(e);
    } finally {
      // setLoading(false);
    }
  };

  const loadOkr = async () => {
    // setLoading(true);
    try {
      const { data } = await api.get(`/okr/project/${id}`);
      console.log("OKR: ", data.data);
      setIsOkr(true);
      setOkr(data.data);
    } catch (e) {
      console.log("E: ", e);
      setIsOkr(false);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <ScrollView className="bg-white h-full">
      <View className="p-6">
        <View className="flex-row justify-between pb-1">
          <Text className="text-black text-2xl font-bold">{project?.name}</Text>
        </View>
      </View>

      <View className="rounded-xl border p-6 mx-5 mb-5">
        <Text className="pb-3 text-xl text-gray-500 font-bold">Descrição</Text>
        <Text className="pb-3 text-gray-500">
          {project?.description}
        </Text>
      </View>

      {!isOkr &&
        <View className="flex items-center justify-center text-center">
          <TouchableOpacity 
            className="w-1/2 flex items-center p-3 bg-black border rounded-lg ml-1"
            onPress={() => navigation.navigate('Okr', {id: id})}
            >
            <Text className="text-1xl text-white font-bold">Criar OKR</Text>
          </TouchableOpacity>
        </View>
      }
      
      {isOkr &&
        <View className="rounded-xl border p-6 mx-5 mb-5">
          {okr && okr.map((item) => (
            <View key={item.id}>
              <Text className="pb-3 text-xl text-gray-500 font-bold">{item.objective}</Text>
              <Text className="pb-3 text-gray-500">{item.kr_one}</Text>
              <Text className="pb-3 text-gray-500">{item.kr_two}</Text>
              <Text className="pb-3 text-gray-500">{item.kr_three}</Text>
              <Text className="pb-3 text-gray-500">{item.kr_four}</Text>
              <Text className="pb-3 text-gray-500">{item.kr_five}</Text>
            </View>
          ))}
        </View>
      }
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