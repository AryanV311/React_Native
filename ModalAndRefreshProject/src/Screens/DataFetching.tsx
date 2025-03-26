//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

interface PostsData {
    id:number,
    title:string
}

const DataFetching = () => {

    const [data, setData] = useState<PostsData[]>([]);
    const [loading, setloading] = useState(false);

    const fetchingPostData = async() => {
        try {
            setloading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postData: PostsData[] = await response.json();

            if(postData){
                setData(postData);
                setloading(false);
            }

        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        fetchingPostData();
    },[]);

    console.log(data);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Data Fetching using fetch Method</Text>
            {
                loading ? <ActivityIndicator size={'large'} color="#74B9FF" style={styles.loader} /> : <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.itemTxt}>{item.title} </Text>
                    </View>
                )} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:15,
    },
    header:{
        fontSize:18,
        fontWeight:'bold',
    },
    item:{
        flex:1,
        backgroundColor:'#74B9FF',
        marginVertical:8,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:10,
        elevation:4,
    },
    itemTxt:{
        fontSize:16,
        fontWeight:'600',
    },
    loader:{
        marginVertical:20,
    },
});

export default DataFetching;
