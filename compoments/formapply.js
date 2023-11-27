import React, { useState } from 'react';
import { Button, View, TextInput } from 'react-native';
import emailjs from '@emailjs/browser';
import { useNavigation } from '@react-navigation/native';

function FormApply({ route }) {
const navigation = useNavigation();

  const [id, setid] = useState('');
  const [name, setname] = useState('');

  const [email, setemail] = useState('');
  const [linkcv, setlinkcv] = useState('');
  const { companyName } = route.params;
  
  const handlenoidungadd = async () => {
    const serviceId = 'service_loe6b1e';
    const templateId = 'template_04exie8';
    const publicKey = '-IYQfcnJBTt5J3QzS';

    const templateParams = {
      user_email: email,
      user_companyName: companyName,
      user_id: id,
      user_linkcv: linkcv,
      user_name :name,
    };

    try {
      const emailResponse = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully!', emailResponse);

      const response = await fetch('https://65631074ee04015769a6c2aa.mockapi.io/formapply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          name: companyName,
          email: email,
          linkcv: linkcv,
          username:name,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add data');
      }

      const data = await response.json();
      console.log('add response:', data);

      navigation.navigate('jobs');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <View>
        <TextInput
        placeholder="Name : "
        value={name}
        onChangeText={(text) => setname(text)}
      />
      <TextInput
        placeholder="Số Căn Cước : "
        value={id}
        onChangeText={(text) => setid(text)}
      />

    <TextInput
                placeholder="Tên Công Ty :"
                value={companyName} 
                editable={false} 
            />

      <TextInput
        placeholder="Email :"
        value={email}
        onChangeText={(text) => setemail(text)}
      />

      <TextInput
        placeholder="Link CV :"
        value={linkcv}
        onChangeText={(text) => setlinkcv(text)}
      />

      <Button title="Add" onPress={handlenoidungadd} />
    </View>
  );
}

export default FormApply;
