import React from 'react'
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import {useState, useEffect} from 'react'

const ChuckNorrisFact = () => {
    
    const [fact, setFact] = useState('')
    const fetchFact = async () => {

        try{
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const decoded = await response.json();
            const newFact = decoded.value;
            //debugger;
            //console.log(decoded);
            // const { value } = decoded;
            //const { value:fact } = decoded;
            setFact(newFact);
        }catch(error){
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchFact();
        console.log('useEffect happening');
    }
    , []);

    

    return (
    <>
        <Text style={styles.text}>
            {fact}
        </Text>
        <Pressable style={styles.button} onPress={fetchFact}>
            <Text>
                Get a new fact
            </Text>
        </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: 20,
        padding: 10,
        borderRadius: 5
    }
})

export default ChuckNorrisFact