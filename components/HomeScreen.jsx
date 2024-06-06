import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const fetchJobs = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://94cd0440-328-49b-4الو/jobs?page=${pageNumber}&search=${search}`);
      setJobs(pageNumber === 1 ? response.data.jobs : [...jobs, ...response.data.jobs]);
      setPage(pageNumber);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [search]);

  const loadMore = () => {
    fetchJobs(page + 1);
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text onPress={() => navigation.navigate('JobDetails', { job: item })}>{item.title}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Search for jobs"
        value={search}
        onChangeText={setSearch}
        style={{ marginBottom: 20, padding: 10, borderColor: '#ccc', borderWidth: 1 }}
      />
      {loading && page === 1 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={jobs}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}
        />
      )}
    </View>
  );
};

export default HomeScreen;
