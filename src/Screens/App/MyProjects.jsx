import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../Context/Auth';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import { ListProjects } from '../../Components/List/ListProjects';
import { useNavigation } from '@react-navigation/native';
import api from '../../Services/api';

export default function MyProjects() {
  const navigation = useNavigation();
  const { user, singOut } = useAuth();
  const [search, setSearch] = useState('');
  const [project, setProject] = useState('');

  const logout = async () => {
    try {
      await singOut();
    } catch (emailError) {
      console.log("error: ", e);
    }
  };

  useEffect(() => {
    console.log('Project');
    loadRegisters();
  }, []);

  const loadRegisters = async () => {
    // setLoading(true);
    // setStatus("open");
    try {
      const { data } = await api.get("/project");
      console.log("Projetos: ", data.data);
      setProject(data.data);

    } catch (e) {
      console.log(e);
    } finally {
      // setLoading(false);
    }
  };

  const hendleSearch = async () => {
    console.log("Pesquisa");
  };

  return (
    <View className="bg-white p-6 h-full">
      <View>
        <View className="flex-row justify-between pb-4">
          <Text className="text-gray-400 text-2xl font-bold pb-4">My project</Text>
          <View className="flex-row gap-3">
            <TouchableOpacity onPress={() => navigation.navigate('New-Project')} className="flex-row justify-center items-center text-blue-700">
              <AntDesign name="pluscircle" size={30} color='blue' />
            </TouchableOpacity>
            <TouchableOpacity onPress={logout} className="flex-row justify-center items-center text-white">
              <AntDesign name="logout" size={30} color='red' />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container} className="bg-gray-300">
          <TextInput
            style={styles.input}
            className="bg-gray-300"
            placeholder="Search" 
            onChangeText={setSearch}
            value={search}
          />
          <TouchableOpacity onPress={hendleSearch}>
            <Icon style={styles.icon} name="search" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      <ListProjects project={project} />
    </View>
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