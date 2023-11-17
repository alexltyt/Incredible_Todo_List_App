import React from 'react'
import { View, Text,Pressable,StyleSheet } from 'react-native'
import {useState, useEffect} from 'react'

const GOTQuote = () => {

  const [quote, setQuote] = useState('');
  const [character, setCharacter] = useState('');
  const [house, setHouse] = useState('');
  const fetchQuote = async () => {
    try{
      const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
      const decoded = await response.json();
      const newQuote = decoded.sentence;
      const newCharacter = decoded.character.name;
      const newHouse = decoded.character.house.name;
      setQuote(newQuote);
      setCharacter(newCharacter);
      setHouse(newHouse);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchQuote();
    console.log('useEffect happening');
  },[]);
  return (
    <>
      <Text style={styles.title}>
        Game of Thrones Quote
      </Text>
      <Text style={styles.text}>
        {quote}
      </Text>
      <Text style={styles.text}>
        by <Text style={styles.character}>{character} </Text>from{"\n"}<Text style={styles.character}>{house}</Text>
      </Text>
      <Pressable style={styles.button} onPress={fetchQuote}>
        <Text>
          Get a new quote
        </Text>
      </Pressable>
      
    </>
  )
}

const styles = StyleSheet.create({
  text: {
      fontSize: 15,
      color: '#06543B',
      textAlign: 'center'
  },
  title: {
    fontSize: 30,
    color: '#3DB3C1',
    textAlign: 'center'
  },
  character: {
    color: '#F7913F',
    fontWeight: 'bold'
  },
  button: {
    width: '100%', 
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#F7913F',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10

  }
})

export default GOTQuote