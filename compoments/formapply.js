
import React, { useState, useEffect } from 'react';
import { Button, View, Text, TextInput, Alert } from 'react-native';

function formapply({   }){



    const [id, setid] = useState('');
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [linkcv, setlinkcv] = useState('');

    const handlenoidungadd = async () => {
        try {
            const response = await fetch('https://65631074ee04015769a6c2aa.mockapi.io/formapply', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id: id,
                name:name,
                email:email,
                linkcv:linkcv,
              }),
            });
    
            const data = await response.json();
            console.log('add response:', data);

            navigation.navigate('HomePages');

    
         
        } catch (error) {
          console.error('Lỗi khi thực hiện add:', error);
        }
      };

    return(
        <View>
    
      <TextInput
        placeholder="Số Căn Cước : "
        value={id}
        onChangeText={(text) => setid(text)}
      />


      <TextInput
        placeholder="Tên Công Ty :"
        value={name}
        onChangeText={(text) => setname(text)}
      />

      <TextInput
        placeholder="Email  :"
        value={email}
        onChangeText={(text) => setemail(text)}
      />

      <TextInput
        placeholder="Link CV  :"
        value={linkcv}
        onChangeText={(text) => setlinkcv(text)}
      />

      <Button title="Add" onPress={handlenoidungadd} />
    </View>
    );

}
export default formapply;