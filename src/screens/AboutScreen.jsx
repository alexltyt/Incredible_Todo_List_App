import React from 'react'
import { View,Button,Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  return (
    <MainLayout>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 30}}>About</Text>
            <Text style={{fontSize: 20}}>Incredible Todo List App</Text>
            <Text style={{fontSize: 20}}>By: Alex Leung</Text>
            <Text style={{fontSize: 20,marginBottom: 200 }}>{new Date().toDateString()}</Text>


            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    </MainLayout>
  )
}

export default AboutScreen