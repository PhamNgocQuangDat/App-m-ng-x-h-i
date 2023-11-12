import React, { useState } from 'react';
import { Button, View, Text, TextInput, Alert } from 'react-native';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = async () => {
    try {
      const response = await fetch('https://654468f65a0b4b04436c5590.mockapi.io/Login');
      const data = await response.json();
      

      const user = data.find((item) => item.User === email && item.Pass === password);

      if (user) {
        props.signIn(user);
      } else {
        console.log('Đăng nhập không thành công');

        const trangThaiLoginElement = document.getElementById('trangthailogin');
        trangThaiLoginElement.innerText = 'Đăng nhập không thành công';
    
      }
    } catch (error) {
      console.error('Lỗi khi thực hiện đăng nhập:', error);
    }
  };

  return (
    
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center' ,paddingLeft:30 }}>
      
       <h1 style={{color:'red' ,borderWidth: 1, fontSize: 20}}>
          Welcome to your <br></br> professional community
        </h1>
    <View style={{ flex: 6, alignItems: 'center' }}>
      <View style={{ marginTop: 20 }}>
       
      <label class="input-label mb-1" for="session_key">
          Email or phone
        </label>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingLeft: 10,
            width: 300,
            borderRadius: 5,
          }}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
       
       <label class="input-label mb-1" for="session_password">
          Password
        </label>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingLeft: 10,
            width: 300,
            borderRadius: 5,
          }}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <p id='trangthailogin' style={{color:'red' ,borderWidth: 1, fontSize: 15}}></p>
        
        <a href=''>Forgot password?</a>
        <br></br>
     
        <Button title="LOGIN"
         
        onPress={handleLoginPress} />
       
      </View>
    </View>
    </View>
  );
}

export default Login;
