import React from 'react';
import { View, Text } from 'react-native';

const JobDetailsScreen = ({ route }) => {
  const { job } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>{job.title}</Text>
      <Text>{job.description}</Text>
    </View>
  );
};

export default JobDetailsScreen;

