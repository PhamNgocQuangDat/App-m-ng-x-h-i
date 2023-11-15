import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Messagin  from './Messagin';

const App = () => {
     const handleImagePress = () => {
        navigation.navigate('Messagin');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
              <View style={styles.avatar}>
                  
                  <Image
                      style={styles.avatarImage}
                      source={require('../assets/hoang.jpg')}  />
        
        </View>
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>

              <View> 
                  <TouchableOpacity onPress={handleImagePress}>
                      <Image
                          source={require('../assets/messeger.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        
        </View>      
      </View>
          {/* Nội dung của ứng dụng ở đây */}
          <View style={styles.separator}></View> {/* Đường ngăn cách header */}
      </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 0,
  marginTop: -9, // Điều chỉnh giá trị âm để làm giảm khoảng trống giữa Header và Content
},



  
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f0f0f0',
    height: 64, // Chiều cao cố định cho phần header
  },

  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    padding: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  
  buttonText: {
    color: '#fff',
    },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 1,
     // Chiều rộng của đường ngăn cách sẽ bằng 100% của màn hình
  },
});
export default App;
