import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [User, setUsername] = useState('');
  const [Pass, setPassword] = useState('');

  const handleLogin = async () => {
    if (User === '' || Pass === '') {
      console.log('Vui lòng nhập đầy đủ tên người dùng và mật khẩu');
    } else {
      try {
        const response = await fetch('https://654468f65a0b4b04436c5590.mockapi.io/Login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            User: User,
            Pass: Pass,
          }),
        });

        const data = await response.json();
        console.log('Login response:', data);

        // Handle success or error response from the server
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join LinkedIn now — it’s free!</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={User}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={Pass}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: 300,
    borderRadius: 5,
  },
});

export default LoginScreen;
