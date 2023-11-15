import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerContainer: {
    flex: 0.08,  // Giảm giá trị flex của header
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  contentContainer: {
    flex: 0.8,  // Giảm giá trị flex của content
  },
  footerContainer: {
    flex: 0.06,  // Giảm giá trị flex của footer
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightcoral',
  },
});

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.contentContainer}>
        <ScrollView>
          <Content />
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

export default HomePage;



