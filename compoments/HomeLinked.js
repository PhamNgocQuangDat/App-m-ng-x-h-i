import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeLinked() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
       
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Linked </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 5,
  
  },
  titleContainer: {
    flex: 3,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    color:"#a103fc",
  },
  inputContainer: {
    flex: 2,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flex: 2,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeLinked;