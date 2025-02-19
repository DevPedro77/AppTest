import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Title } from './src/Title';

export default function App() {
  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>

      <Title title='Pedrão'/>
      <Text style={styles.title}>App Contador</Text>

      <View style={styles.counterArea}>
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <Text>+</Text>
      </TouchableOpacity>

      <Text testID='counter'>{counter}</Text>

      <TouchableOpacity onPress={() => setCounter(counter - 1)}>
        <Text>-</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  counterArea:{
    flexDirection: 'row',
    gap: 14,
    marginVertical: 14
  }
});
