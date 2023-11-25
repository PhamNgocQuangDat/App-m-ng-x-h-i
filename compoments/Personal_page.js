import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions, Text  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function PersonalPage() {

  const navigation = useNavigation();

   const navigateToPage = (pageName) => {
    navigation.navigate(pageName); // Chuyển hướng đến trang tương ứng với pageName
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/hinh-nen-mau-xanh-ngoc-tron.jpg')}
        style={styles.coverImage}
      />
      <View style={styles.profileInfo}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/hoang.jpg')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.profileContent}>
          <View style={styles.profileName}>
            <Text style={styles.name}>HOANG CAO</Text>

             <TouchableOpacity onPress={() => navigateToPage('Setting')}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faGear} />
          <Image
            source={require('../assets/icon_caybut.jpg')}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
          </View>
          <Text style={styles.description}>Student IUH</Text>
          <Text style={styles.description}>HỒ CHÍ MINH, VIỆT NAM</Text>
          <Text style={styles.followCount}>2900 followers . 1300 connections</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Open to</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add section</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.orangeBackground}>
            <View style={styles.divider}>
              <View style={styles.textWithIcon}>
                <Text style={styles.description}>Show recruiter you're open to work</Text>
                <Image
                  source={require('../assets/icon_caybut.jpg')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.description}>Control who sees this</Text>
            </View>
            <TouchableOpacity style={styles.orangeButton}>
              <Text style={styles.buttonText}>Get started</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.orangeBackground1}>
            <View style={styles.divider}>
              <Text style={styles.description}>Suggested for you</Text>
              <Text style={styles.description}>Private to you</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  profileInfo: {
    flexDirection: 'row',
    position: 'absolute',
    top: 120,
    left: 20,
    right: 20,
  },
  avatarContainer: {
    marginRight: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileContent: {
    position: 'absolute',
    top: 100,
    left: 20,
    right: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  followCount: {
    color: 'blue',
    fontSize: 16,
  },
  orangeBackground: {
    backgroundColor: '#FFFFCC',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  orangeButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  orangeBackground1: {
    backgroundColor: '#CCCCCC',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  textWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  profileName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PersonalPage;
