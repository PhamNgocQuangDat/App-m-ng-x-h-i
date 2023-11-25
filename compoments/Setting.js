import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Settings() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Image
            style={styles.sectionImage}
            source={require('../assets/KLM_login_register.png')}
          />
          <View style={styles.sectionText}>
            <Text style={styles.sectionTitle}>Account preferences</Text>
            <Text style={styles.subText}>Options for managing your account and experience on LinkedIn</Text>
          </View>
        </View>
      </View>




      <View style={styles.separator}></View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Image
            style={styles.sectionImageLarge}
            source={require('../assets/icon_okhoa.jpg')}
          />
          <View style={styles.sectionText}>
            <Text style={styles.sectionTitle}>Sign in & security</Text>
            <Text style={styles.subText}>Options and controls for signing in and keeping your account safe</Text>
          </View>
        </View>
      </View>




      <View style={styles.separator}></View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Image
            style={styles.sectionImage}
            source={require('../assets/icon_mat.png')}
          />
          <View style={styles.sectionText}>
            <Text style={styles.sectionTitle}>Visibility</Text>
            <Text style={styles.subText}>Control who sees your activity and information on LinkedIn</Text>
          </View>
        </View>
      </View>


      <View style={styles.separator}></View>

<View style={styles.section}>
  <View style={styles.sectionHeader}>
    <Image
      style={styles.sectionImage}
      source={require('../assets/icon_lathu.jpg')}
    />
    <View style={styles.sectionText}>
      <Text style={styles.sectionTitle}>Communications</Text>
      <Text style={styles.subText}>Controls for emails, invites, andnotification</Text>
    </View>
  </View>
</View>
<View style={styles.separator}></View>

<View style={styles.section}>
  <View style={styles.sectionHeader}>
    <Image
      style={styles.sectionImage}
      source={require('../assets/icon_khien.png')}
    />
    <View style={styles.sectionText}>
      <Text style={styles.sectionTitle}>Data privacy</Text>
      <Text style={styles.subText}>Control how Linkedin uses yourainformation for general site usenand job seekinga</Text>
    </View>
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
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 10,
    width: '100%',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  sectionImageLarge: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  sectionText: {
    flex: 1,
  },
  subText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Settings;
