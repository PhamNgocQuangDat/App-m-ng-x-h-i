import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions, Text  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faUserGroup, faSquarePlus, faBell, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const navigation = useNavigation();

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  }

  const imageWidth = Dimensions.get('window').width / 5; // Chia ra làm 5 cột

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToPage('Page1')}>
        <View style={[styles.iconContainer, { width: imageWidth }]}>
          <FontAwesomeIcon icon={faHouse}  style={[styles.footerImage, { fontSize: 50 }]} />
          <Text style={[styles.iconText, { fontSize: 11 }]}>Home</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToPage('Page2')}>
        <View style={[styles.iconContainer, { width: imageWidth }]}>
          <FontAwesomeIcon icon={faUserGroup} style={styles.footerImage} />
          <Text style={[styles.iconText, { fontSize: 11 }]}>My Network</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToPage('Page3')}>
        <View style={[styles.iconContainer, { width: imageWidth }]}>
          <FontAwesomeIcon icon={faSquarePlus} style={styles.footerImage} />
          <Text style={[styles.iconText, { fontSize: 11 }]}>Post</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToPage('Page4')}>
        <View style={[styles.iconContainer, { width: imageWidth }]}>
          <FontAwesomeIcon icon={faBell} style={styles.footerImage} />
          <Text style={[styles.iconText, { fontSize: 11 }]}>Notification</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToPage('Page5')}>
        <View style={[styles.iconContainer, { width: imageWidth }]}>
          <FontAwesomeIcon icon={faBriefcase} style={styles.footerImage} />
          <Text style={[styles.iconText, { fontSize: 11 }]}>Jobs</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    borderTopWidth: 1, // Thêm đường viền phân cách
    borderColor: 'lightgray',
    mar: 1,
  },
  footerImage: {
    height: 30, // Đặt chiều cao của hình ảnh
    resizeMode: 'contain', // Đảm bảo hình ảnh không bị méo khi căn chỉnh kích thước
    fontSize: 54, 
  },
  iconText: {
    marginTop: 1, // Adjust the spacing between icon and text
    
  },
  iconContainer: {
    alignItems: 'center',
    fontSize: 1,
  },
});

export default Footer;
