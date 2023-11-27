import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Addnotes({ route }) {
    const navigation = useNavigation();

    const [noiDung, setNoiDung] = useState('');
    const [level, setlevel] = useState('');
    const [LoaiViecLam, setLoaiViecLam] = useState('');
    const { image } = route.params;
    const [NameCongTy, setNameCongTy] = useState('');

    

    const handleimgtoalll = async () => {
        try {
            const res = await fetch('https://65631074ee04015769a6c2aa.mockapi.io/jobs');
            const data = await res.json();
            const filteredData = data.filter((item) => item.avtCongTy === image);

            setNoiDung(filteredData[0].GioiThieu);
            setlevel(filteredData[0].level);
            setLoaiViecLam(filteredData[0].LoaiViecLam);

            setNameCongTy(filteredData[0].nameDoanhNghiep);
        } catch (error) {
            console.error(error);
        }
    };
    const handlePress = () => {
        navigation.navigate('formapply', { companyName: NameCongTy });
    };
    useEffect(() => {
        handleimgtoalll();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image source={image} style={{ width: 150, height: 300 }} />
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.headerText}>Công ty : </Text>
                <Text style={styles.text}>{NameCongTy}</Text>

                <Text style={styles.headerText}>Giới Thiệu: </Text>
                <Text style={styles.text}>{noiDung}</Text>

                <Text style={styles.headerText}>Loại Việc Làm: </Text>
                <Text style={styles.text}>{LoaiViecLam}</Text>

                <Text style={styles.headerText}>Kinh Nghiệm: </Text>
                <Text style={styles.text}>{level}</Text>
                
                <Button title="Apply" onPress={handlePress}  />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',  
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,  
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: '100%',  
        height: '100%', 
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        marginLeft: 20, 
    },
    headerText: {
        fontWeight: 'bold', 
        fontSize: 18,  
        marginBottom: 5,  
    },
    text: {
        fontSize: 16,
        marginBottom: 10,  
    },
    button: {
        marginTop: 10,
    },
});

export default Addnotes;
