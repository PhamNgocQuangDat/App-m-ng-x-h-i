// Addnotes.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Addnotes({ route }) {
    const navigation = useNavigation();

    const [noiDung, setNoiDung] = useState('');
    const [level, setlevel] = useState('');

    const [LoaiViecLam, setLoaiViecLam] = useState('');
    const { image } = route.params;

    const handleimgtoalll = async () => {
        try {
            const res = await fetch('https://65631074ee04015769a6c2aa.mockapi.io/jobs');
            const data = await res.json();
            const filteredData = data.filter((item) => item.avtCongTy === image);

            setNoiDung(filteredData[0].GioiThieu);
            setlevel(filteredData[0].level);
            setLoaiViecLam(filteredData[0].LoaiViecLam);
        } catch (error) {
            console.error(error);

        }
    };


    useEffect(() => {
        handleimgtoalll();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 3 }}>
                <Image source={image} style={{ width: 300, height: 200 }} />
                <Text>GioiThieu: {noiDung}</Text>
                <Text>LoaiViecLam :{LoaiViecLam}</Text>
                <Text>Kinh Nghiệm :{level}</Text>
              
            </View>
        </View>
    );
}

export default Addnotes;