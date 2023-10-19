import { FlatList, RefreshControl, Text, View } from "react-native";
import React, { useCallback, useEffect, useState, memo } from 'react';
// import { Loading } from "../Loading";
// import api from "../../services/api";
import { ItemListProjects } from "./ItemListProjects";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export const ListProjects = memo(({ actives, status, loading, networkOf, onChildListActives }) => {
  const [list, setList] = useState([]);
  const [firstPage, setFirstPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [hasMoreData, setHasMoreData] = useState(false);
  const [loadingHeader, setLoadingHeader] = useState(false);
  const [lastNextPage, setLastNextPage] = useState("");
  const [refreshing, setRefreshing] = useState(false);


  const renderItem = ({ item }) => (<ItemListProjects item={item} />)
  const keyExtrator = useCallback(item => item.id)

  // if (loading) return <Loading />
  return (
    <View className="mb-28">
      {/* {refreshing ? <Loading /> : null}
      {list?.length > 0 ?  */}
        <FlatList
          data={DATA}
          contentContainerStyle={{paddingBottom: 20}}
          initialNumToRender={15}
          keyExtractor={keyExtrator}
          renderItem={renderItem}
          // onEndReached={handleOnEndReached}
          onEndReachedThreshold={0.1}
          refreshControl={
            <RefreshControl
              //refresh control used for the Pull to Refresh
              refreshing={refreshing}
              // onRefresh={onRefresh}
            />
          }
          // ListFooterComponent={ hasMoreData && <Loading /> }
        /> 
      {/* : */}
        {/* <Text className="text-xl text-center text-gray-400">
          Nenhum ativo encontrado
        </Text> */}
      {/* } */}
    </View>
  );
})