import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, Button, TouchableOpacity, Image } from 'react-native';

const styles = {
 
  entityImage: {
    width: 60,
    height: 60,
  },
  entityContent: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headline: {
    fontSize: 14,
    color: 'gray',
  },
  locationWithDurationSince: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 12,
    color: 'gray',
  },
  jobListDate: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 5,
  },
  
};

const Contentjob = (props) => {
    const navigation = useNavigation();

    const [image, setImage] = useState(require('../assets/icon.png'));
    const [companyName, setCompanyName] = useState('');
    const [ViTri, setViTri] = useState('');
    const [DiaChi, setDiaChi] = useState('');
    const [NgayDang, setNgayDang] = useState('');
    
    const [image2, setImage2] = useState(require('../assets/icon.png'));
    const [companyName2, setCompanyName2] = useState('');
    const [ViTri2, setViTri2] = useState('');
    const [DiaChi2, setDiaChi2] = useState('');
    const [NgayDang2, setNgayDang2] = useState('');
    const [image3, setImage3] = useState(require('../assets/icon.png'));
    const [companyName3, setCompanyName3] = useState('');
    const [ViTri3, setViTri3] = useState('');
    const [DiaChi3, setDiaChi3] = useState('');
    const [NgayDang3, setNgayDang3] = useState('');
    

    
    const handleUploadIMG = async () => {
        try {
            const res = await fetch('https://65631074ee04015769a6c2aa.mockapi.io/jobs');
            const data = await res.json();
            const getavt = data.filter((item) => item.id);

            console.log(getavt);
            setImage(getavt[0].avtCongTy);
            setCompanyName(getavt[0].nameDoanhNghiep);
            setViTri(getavt[0].ViTri);
            setDiaChi(getavt[0].DiaChi);
            setNgayDang(getavt[0].NgayDang);

            setImage2(getavt[1].avtCongTy);
            setCompanyName2(getavt[1].nameDoanhNghiep);
            setViTri2(getavt[1].ViTri);
            setDiaChi2(getavt[1].DiaChi);
            setNgayDang2(getavt[1].NgayDang);

            setImage3(getavt[2].avtCongTy);
            setCompanyName3(getavt[2].nameDoanhNghiep);
            setViTri3(getavt[2].ViTri);
            setDiaChi3(getavt[2].DiaChi);
            setNgayDang3(getavt[2].NgayDang);

        } catch (error) {
        }
    };

    useEffect(() => {
        handleUploadIMG();
    }, []);


  
    return (
        <View style={{ flex: 1 }}>
             <View style={{ flex: 1 }}>
        <br></br>
      <Text style={{ fontSize: 15 }}>Jobs by category</Text>
      <br></br>
      <View style={{ height: 30, flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            flexDirection: 'column',
            borderRadius: 50,
            overflow: 'hidden',
          }}
        >
          <Text>Human Resources Specialist</Text>
        </TouchableOpacity>
        <View style={{ width: 10 }} />
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            flexDirection: 'column',
            borderRadius: 50,
            overflow: 'hidden',
          }}
        >
          <Text>Senior Human Resources Specialist</Text>
        </TouchableOpacity>
      </View>
    
          <View style={{ flexDirection: 'column', flex: 6 }}>
            <Text style={{ fontSize: 20 }}>Jobs for you</Text>
            <TouchableOpacity
              onPress={() => console.log('Navigate to job details or perform other actions here')}
              style={{ marginBottom: 10 }}
            >
              <View style={{ flexDirection: 'row', flex: 3 }}>
              <Text onPress={() => {
                navigation.navigate('Addnotes', {
                    image: image,
                });        

                }}>
                <Image source={image} style={styles.entityImage} />
                </Text>
                <View style={styles.entityContent}>
                  <Text style={styles.name}>{companyName}</Text>
                  <Text style={styles.headline}>{ViTri}</Text>
                  <View style={styles.locationWithDurationSince}>
                    <Text style={styles.location}>{DiaChi}</Text>
                    <Text style={styles.jobListDate}>{NgayDang}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
    
            <TouchableOpacity
              onPress={() => console.log('Navigate to job details or perform other actions here')}
              style={{ marginBottom: 10 }}
            >
                  <View style={{ flexDirection: 'row', flex: 3 }}>
              <Text onPress={() => {
                navigation.navigate('Addnotes', {
                    image: image3,
                });        

                }}>
                <Image source={image3} style={styles.entityImage} />
                </Text>
                <View style={styles.entityContent}>
                  <Text style={styles.name}>{companyName3}</Text>
                  <Text style={styles.headline}>{ViTri3}</Text>
                  <View style={styles.locationWithDurationSince}>
                    <Text style={styles.location}>{DiaChi3}</Text>
                    <Text style={styles.jobListDate}>{NgayDang3}</Text>
                  </View>
                </View>
              </View>
    
                
              <View style={{ flexDirection: 'row', flex: 3 }}>
              <Text onPress={() => {
                navigation.navigate('Addnotes', {
                    image: image2,
                });        

                }}>
                <Image source={image2} style={styles.entityImage} />
                </Text>

                <View style={styles.entityContent}>
                  <Text style={styles.name}>{companyName2}</Text>
                  <Text style={styles.headline}>{ViTri2}</Text>
                  <View style={styles.locationWithDurationSince}>
                    <Text style={styles.location}>{DiaChi2}</Text>
                    <Text style={styles.jobListDate}>{NgayDang2}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          
          </View>
          </View>
        </View>
      );
    };

export default Contentjob;
