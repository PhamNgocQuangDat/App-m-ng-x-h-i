import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://6550a2047d203ab6626e003e.mockapi.io/users');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const renderItem = ({ item }) => {
  return (    
    <View style={styles.feedItem}>
      <View style={styles.userInfo}>
        <Image style={styles.avatar} source={{ uri: item.avatar }} />
        <View>
          <Text style={styles.userName}>{item.userName}</Text>
          <Text style={styles.group}>{item.group}</Text>
        </View>
      </View>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.postText}>{item.postText}</Text>
      <Text style={styles.comment}>Comments: {item.comment}</Text>
    </View>
  );
};

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0,
  },
  feedItem: {
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  group: {
    fontSize: 16,
  },
  time: {
    fontSize: 14,
    color: 'gray',
  },
  postText: {
      fontSize: 16,
      marginTop: 10,
      marginBottom: 10,
  },
  comment: {
    fontSize: 14,
    textAlign: 'right',
    color: 'blue',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});



export default Content;
