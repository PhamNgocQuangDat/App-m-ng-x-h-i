import React, { useState } from 'react';
import { Pressable, View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function ManageMyWork() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/Ionic-Ionicons-People.512.png')}
        />
        <Text style={styles.sectionTitle}>Connections</Text>
        {/* Thêm nội dung của phần Connections */}
      </View>

      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/KLM_login_register.png')}
        />
        <Text style={styles.sectionTitle}>People I Follow</Text>
        {/* Thêm nội dung của phần People I Follow */}
      </View>

      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/business-center_2088018.png')}
        />
        <Text style={styles.sectionTitle}>Companies</Text>
        {/* Thêm nội dung của phần Companies */}
      </View>

      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require('../assets/Simpleicons-Team-Simple-Myspace.512.png')}
        />
        <Text style={styles.sectionTitle}>Groups</Text>
        {/* Thêm nội dung của phần Groups */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    flexDirection: 'row', // Sắp xếp hình ảnh và văn bản cùng một hàng
    alignItems: 'center', // Căn chỉnh theo chiều ngang
    marginBottom: 20,
    borderBottomWidth: 1, // Thêm đường kẻ chia hàng ra
    paddingBottom: 10, // Khoảng cách giữa chữ và đường kẻ chia hàng
  },
  sectionImage: {
    width: 30, // Độ rộng của hình ảnh
    height: 30, // Độ cao của hình ảnh
    marginRight: 10, // Khoảng cách giữa hình ảnh và văn bản
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ManageMyWork;
