import React from 'react';
import { StyleSheet, View } from 'react-native';

const JobDetailsScreen = () => {
    return (
        <view>
            <Text>{Job.title}</Text>
            <Text>{Job.description}</Text>
        </view>
    );
}

const styles = StyleSheet.create({})

export default JobDetailsScreen;
