import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const CTNotification = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://654468f65a0b4b04436c5590.mockapi.io/Login');
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
          <View style={styles.userInfoText2}>
          <View style={styles.userInfoText}>
            <Text style={styles.User}>{item.User}</Text>
            <Text style={styles.viewText}> and 2,434 </Text>
           
          </View>
          <Text style={styles.viewText}>others reacted to your post</Text>
          </View>
        </View>
        
        <Text style={styles.postText}>{item.postText}</Text>
        <View style={styles.commentsAndReactions}>
          <Text style={styles.reaction}>{item.reaction} Reactions</Text>
          <Text style={styles.comment}>{item.comment} Comments </Text>
      </View>
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
    padding: 10,
  },
  feedItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
 userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  User: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  postText: {
    fontSize: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    flexWrap: 'wrap',
    marginLeft: 60,
    
  },
  commentsAndReactions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 60,
  },
  reaction: {
    fontSize: 14,
    color: 'black',
    marginRight: 10, // Khoảng cách giữa 'Reactions' và 'Comments'
  },
 viewComments: {
    fontSize: 14,
    color: 'black',
    flexShrink: 1,
    flexWrap: 'wrap',
   width: '70%', // hoặc kích thước phù hợp
    marginLeft: 60,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfoText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
   userInfoText2: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});

export default CTNotification;
