import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({ siged: true });

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(null);
  const [name, setName] = useState(null);
  const [token, setToken] = useState(null);

  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    loadStoragedData();
  }, []);

  const loadStoragedData = async () => {
    setLoading(true)
    try {
      const storageToken = await AsyncStorage.getItem('@RNAuth:token');
      const storageName = await AsyncStorage.getItem('@RNAuth:name');
      // const storageEmail = await AsyncStorage.getItem('@RNAuth:email');

      if (storageToken) {
        // api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;

        setDataUser(objUser);

        setToken(storageToken);
        setName(storageName);
      }
    } catch (error) {
      // showToast(error, 'Erro ao carregar dados')
    } finally {
      setLoading(false)
    }
  };


  const singIn = async (data) => {
    setLoading(true);
    try {
      await AsyncStorage.setItem('@RNAuth:token', data.token);
      await AsyncStorage.setItem('@RNAuth:name', data.name);
      // await AsyncStorage.setItem('@RNAuth:email', data.email);

      setDataUser(data);
      // api.defaults.headers['Authorization'] = `Bearer ${data.token}`;
      setToken(data.token);
    } catch (e) {
      console.log("erro: ", e);
    } finally {
      setLoading(false);
    }
  };

  const singOut = async () => {
    try {
      // função de /logout
    } catch (e) {
      console.log("erro: ", e);
    } finally {
      AsyncStorage.clear().then(() => {
        token && setToken(null);
        dataUser && setDataUser(null);
        // api.defaults.headers['Authorization'] = '';
      });
    };
  };

  const teste = () => {
    console.log('test')
  }

  return (
    <AuthContext.Provider value={{
      signed: !!token,
      singIn,
      // singOut,
      // user: name,
      // loading,
      // teste
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
};