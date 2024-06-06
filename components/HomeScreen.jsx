import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, TextInput, View } from 'react-native';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
    const[jobs, setJobs] = useState([]);
    const[page, setpage] =useState(1);
    const[search, setsearch] = useState('');
    const[Loading, setLoading] = useState(false);

    const fetchjobs = async (pageNumber = 1) =>{
        setLoading(true);
        try{
            const response = await axios.get('https://94cd0440-3128-49eb-a37e-49db4ead7208.mock.pstmn.io/jobs?page=${pageNumber}&search4{search}');
            setJobs(pageNumber === 1 ? response.data.jobs :[...jobs, ...response.data.jobs]);
            setpage(pageNumber);
        
        }catch(error){
            console.error(error);
        }finally{
            setLoading(false);
        }
    };

    useEffect(() =>{
        fetchjobs();
    },[search]);


    const loadMore =() =>{
        fetchjobs(page +=1);

    };

    const renderItem = ({item}) =>{
        <View>
            <Text onPress={() => navigation.navigate('jobdetails', {job: item})} > {item.title}</Text>
        </View>
    };





    return (
        <View>
            <TextInput
            placeholder='jobs'
            value={search}
            onChangeText={setsearch}
            style={{marginBottom:20, padding:10}}
            />
            {Loading && page === 1 ? (
                <ActivityIndicator size={'large'} />
            ) : (
                <FlatList
                data={jobs}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={Loading ? <ActivityIndicator size="small" /> : null}

                />
            )
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
