import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Picker } from 'react-native';

function SharePost() {
  const [postContent, setPostContent] = useState('');
  const [visibility, setVisibility] = useState('public'); // Thêm trạng thái chọn chế độ

  const profileImage = require('../assets/hoang.jpg'); // Đường dẫn đến hình ảnh đại diện

  const handleSharePost = () => {
    // Xử lý logic khi người dùng chia sẻ bài viết
    console.log('Chế độ hiển thị:', visibility);
    console.log('Bài viết đã được chia sẻ:', postContent);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={profileImage} />
        <View>
          <Text style={styles.profileName}>HOANG CAO</Text>
          <View style={styles.visibilityContainer}>
          
            <Picker 
              selectedValue={visibility}
              onValueChange={(itemValue) => setVisibility(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Công khai" value="public" />
              <Picker.Item label="Riêng tư" value="private" />
            </Picker>
          </View>
        </View>
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="What do you want to tall about?"
        multiline
        value={postContent}
        onChangeText={text => setPostContent(text)}
      />

      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/image_icon-icons.com_50366.png')}
        />
        <Text style={styles.sectionTitle}>Add a photo</Text>
        {/* Thêm nội dung của phần Connections */}
      </View>

      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/Mayquay.jpg')}
        />
        <Text style={styles.sectionTitle}>Take a video</Text>
        {/* Thêm nội dung của phần Connections */}
      </View>

      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/wolfram-alpha-icon-5.jpg')}
        />
        <Text style={styles.sectionTitle}>Celebrate an occasion</Text>
        {/* Thêm nội dung của phần Connections */}
      </View>


      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/kisspng-computer-icons-portable-network-graphics-document-index-of-assetsvendorionicons-2-1png512-5ce66936ea7b50.2897922015586040869604.png')}
        />
        <Text style={styles.sectionTitle}>Add a document</Text>
        {/* Thêm nội dung của phần Connections */}
      </View>

      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/png-clipart-icone-de-film-porte-documents-sac-valise-conception-d-icones-sacs-de-messager-ligne-noir-et-blanc.png')}
        />
        <Text style={styles.sectionTitle}>Share that you're hiring</Text>
        {/* Thêm nội dung của phần Connections */}
      </View>

      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/user_tagged_icon_250085.png')}
        />
        <Text style={styles.sectionTitle}>find an expert</Text>
        {/* Thêm nội dung của phần Connections */}
      </View>

      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/bar-chart_285789.png')}
        />
        <Text style={styles.sectionTitle}>Create a poll</Text>
        {/* Thêm nội dung của phần Connections */}
      </View>
      <TouchableOpacity style={styles.shareButton} onPress={handleSharePost}>
        <Text style={styles.shareButtonText}>Chia sẻ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  visibilityContainer: {
    marginBottom: 10,
  },
  visibilityLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 25,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    fontWeight: 'bold',
  },
  input: {
    height: 80,
    marginBottom: 20,
    padding: 10,
    fontSize: 20,
  },
  shareButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  shareButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row', // Sắp xếp hình ảnh và văn bản cùng một hàng
    alignItems: 'center', // Căn chỉnh theo chiều ngang
    marginBottom: 10,
   
    
  },
  sectionImage: {
    width: 30, // Độ rộng của hình ảnh
    height: 30, // Độ cao của hình ảnh
    marginRight: 10, // Khoảng cách giữa hình ảnh và văn bản
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 10,
  },
});

export default SharePost;
