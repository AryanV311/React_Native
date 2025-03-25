//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, ActivityIndicator } from 'react-native';

const INITIAL_DATA = Array.from({length: 20}, (_,index) => ({
    id: index.toString(),
    title:`Item ${index + 1}`,
}));

const PullToRefreshPage = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState(INITIAL_DATA);
    const [loading, setLoading] = useState(false);

    const loadMoreItems = () => {
        if(!loading){
            setLoading(true);

            setTimeout(() => {
                const newItems = Array.from({length:10}, (_,index) => ({
                    id:(data.length + index).toString(),
                    title:`Item ${data.length + index + 1}`,
                }));
                setData([...data, ...newItems]);
                setLoading(false);
            },1000);
        }
    };

    const handleOnrefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setData(INITIAL_DATA);
            setRefreshing(false);
        },2000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Pull To Refresh The Page</Text>
            <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({item}) => (
                <View style={styles.item}>
                    <Text style={styles.itemtxt}>{item.title}</Text>
                </View>
            )} onEndReached={loadMoreItems} onEndReachedThreshold={0.1}  refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={handleOnrefresh}/>} 
                ListFooterComponent={
                    loading ? <ActivityIndicator
                     color="#4834DF"
                     size="large"
                     style={styles.loader}
                    /> : null
                }
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
    },
    header:{
        fontSize:18,
        fontWeight:'600',
    },
    item:{
        padding:20,
        borderBottomWidth:1,
        borderBottomColor:'#eee',
    },
    itemtxt:{
        fontSize:18,
        fontWeight:'bold',
    },
    loader:{
        marginVertical:20,
    }
});

export default PullToRefreshPage;
