import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, ScrollView } from 'react-native'; // Thêm ScrollView vào danh sách các import
import { useNavigation } from '@react-navigation/native';

function Messagin() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image
            style={styles.searchIcon1}
            source={require('../assets/magnifying-glass.png')}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search messages"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <Image
            style={styles.searchIcon}
            source={require('../assets/hamburger.png')}
          />
        </View>
      </View>

      <View style={styles.separator}></View> {/* Đường ngăn cách header */}
      
      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/duy.jpg')}
        />
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.sectionTitle}>Thành Đạt</Text>
          <Text style={styles.messageText}>You: Làm bài tập lớn xong chưa</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/HuuBinh.jpg')}
        />
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.sectionTitle}>Hữu Bình</Text>
          <Text style={styles.messageText}>You: OK</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  sectionImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    paddingTop: 10,
    borderRadius: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  searchInput: {
    height: 30,
    width: '100%', // Chiều rộng của TextInput sẽ bằng 100% của màn hình
    paddingLeft: 10,
    fontSize:17,
    
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginLeft:20,
    paddingLeft:10,
  },
  searchIcon1: {
    width: 25,
    height: 25,
  
  },
  messageText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'normal',
  },
  headerContainer: {
    
   
    padding: 5,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 10,
    width: '100%', // Chiều rộng của đường ngăn cách sẽ bằng 100% của màn hình
  },
});

export default Messagin;
