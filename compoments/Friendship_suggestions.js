import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faUserGroup, faSquarePlus, faBell, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Friendship_suggestions() {
  const navigation = useNavigation();

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  }
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const imageWidth = screenWidth / 2;
  const imageHeight = screenHeight / 4;
  const imageWidth1 = Dimensions.get('window').width /5;

  return (
    <View style={styles.container}>
       
      <View style={styles.homeContainer}>
         <TouchableOpacity onPress={() => navigateToPage('Setting')}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ color: 'blue' }}>Manage my network</Text>
      <Text style={{ color: 'black', marginLeft: 5 }}>&gt;</Text>
          </View>
          </TouchableOpacity>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ color: 'blue' }}>Invitation</Text>
      <Text style={{ color: 'black', marginLeft: 5 }}>&gt;</Text>
    </View>
 
</View>
<Text>People you may know from Lomonosov Moscow State University</Text>
<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
  <Image source={require('../assets/anh2.png')} style={{ width: imageWidth, height: imageWidth, resizeMode: 'contain' }} />
  <Image source={require('../assets/anh3.png')} style={{ width: imageWidth, height: imageWidth, resizeMode: 'contain' }} />
</View>
<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
  <Image source={require('../assets/anh2.png')} style={{ width: imageWidth, height: imageWidth, resizeMode: 'contain' }} />
  <Image source={require('../assets/anh3.png')} style={{ width: imageWidth, height: imageWidth, resizeMode: 'contain' }} />
</View>
<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
  <Image source={require('../assets/anh4.png')} style={{ width: imageWidth, height: imageWidth, resizeMode: 'contain' }} />
  <Image source={require('../assets/anh1.png')} style={{ width: imageWidth, height: imageWidth, resizeMode: 'contain' }} />
</View>

      

      <View style={styles.container2}>
      <TouchableOpacity onPress={() => navigateToPage('HomePage')}>
          <View style={[styles.iconContainer, { width: imageWidth1 }]}>
            <FontAwesomeIcon icon={faHouse} style={[styles.footerImage, { fontSize: 50 }]} />
            <Text style={[styles.iconText, { fontSize: 11 }]}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToPage('Friendship_suggestions')}>
          <View style={[styles.iconContainer, { width: imageWidth1}]}>
            <FontAwesomeIcon icon={faUserGroup} style={styles.footerImage} />
            <Text style={[styles.iconText, { fontSize: 11 }]}>My Network</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToPage('SharePost')}>
          <View style={[styles.iconContainer, { width: imageWidth1 }]}>
            <FontAwesomeIcon icon={faSquarePlus} style={styles.footerImage} />
            <Text style={[styles.iconText, { fontSize: 11 }]}>Post</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToPage('Notification')}>
          <View style={[styles.iconContainer, { width: imageWidth1 }]}>
            <FontAwesomeIcon icon={faBell} style={styles.footerImage} />
            <Text style={[styles.iconText, { fontSize: 11 }]}>Notification</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToPage('Page5')}>
          <View style={[styles.iconContainer, { width: imageWidth1 }]}>
            <FontAwesomeIcon icon={faBriefcase} style={styles.footerImage} />
            <Text style={[styles.iconText, { fontSize: 11 }]}>Jobs</Text>
          </View>
        </TouchableOpacity>
        {/* Các TouchableOpacity giữ nguyên không thay đổi */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  homeContainer: {
    
    marginTop: 10,
  },
  homeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'lightgray',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerImage: {
    height: 30,
    resizeMode: 'contain',
  },
  iconText: {
    marginTop: 1,
    fontSize: 11,
  },
  iconContainer: {
    alignItems: 'center',
    fontSize: 1,
  },
});

export default Friendship_suggestions;
