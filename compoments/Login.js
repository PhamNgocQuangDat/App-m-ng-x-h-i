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
        // Đăng nhập thành công, gọi hàm signIn() từ props và truyền user hoặc thông tin cần thiết
        props.signIn(user);
      } else {
        // Đăng nhập không thành công
        Alert.alert('Thông báo', 'Đăng nhập không thành công');
      }
    } catch (error) {
      console.error('Lỗi khi thực hiện đăng nhập:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ marginTop: 20 }}>
        {/* Ô nhập liệu cho Email */}
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

        {/* Ô nhập liệu cho Password */}
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

        {/* Nút đăng nhập */}
        <Button title="LOGIN" onPress={handleLoginPress} />
      </View>
    </View>
  );
}

export default Login;
