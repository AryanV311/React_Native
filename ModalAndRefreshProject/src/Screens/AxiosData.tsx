//import liraries
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';


interface PostsData {
    id:number,
    title:string
}

const AxiosData = () => {

    const [data, setData] = useState<PostsData[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchingAxiosData = async() => {
        try {
            setLoading(true);
            const response = await axios.get<PostsData[]>('https://jsonplaceholder.typicode.com/posts');
            console.log('response::', response.data);
            if(response.data){
                setData(response.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchingAxiosData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    console.log(data);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>AxiosData</Text>
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
        backgroundColor:'#AE1438',
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

export default AxiosData;
