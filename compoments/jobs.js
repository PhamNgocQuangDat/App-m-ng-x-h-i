import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import Contentjob from './Contentjob';
import Footer from './Footer';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    headerContainer: {
      flex: 0.08,  
      justifyContent: 'center',
      backgroundColor: 'lightblue',
    },
    contentContainer: {
      flex: 0.8,  
    },
    footerContainer: {
      flex: 0.06,  
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightcoral',
    },
  });
const jobs = () => {


    return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Header />
          </View>
          <View style={styles.contentContainer}>
          <Contentjob />
          </View>
          <View style={styles.footerContainer}>
            <Footer />
          </View>
        </View>
      );
    };
    
export default jobs;