import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './compoments/Login';
import jobs from './compoments/jobs';
import Addnotes from './compoments/Addnotes';

import DangKy from './compoments/dangky';
import HomePages from './compoments/HomePage'
import Notifications from './compoments/Notification';
import Messagins from './compoments/Messagin';
import SharePosts from './compoments/SharePost';
import HomeLinked from'./compoments/HomeLinked';
import ContentJob from './compoments/Contentjob';

function evtLogin({ navigation }) {
  
  const handleSignIn = (user) => {
    console.log('Đăng nhập thành công', user);
    navigation.navigate('HomeLinked', { user });

    setTimeout(() => {
      navigation.navigate('DETAIL', { user });
    }, 3000);
  };
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Login signIn={handleSignIn} />
    </View>
  );
}

function LoginsendDangKy({ navigation }) {
  
  navigation.navigate('LoginsendDangKy');

  return (

          <DangKy/> 

  );
}


function Detail({ navigation,route }) {
  


  return (
    <View >  
   
     <HomePages/>
    </View>

  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LINKEDIN" component={evtLogin} />
        <Stack.Screen name="LoginsendDangKy" component={LoginsendDangKy} />
        <Stack.Screen name="DETAIL" component={Detail} />
        <Stack.Screen name="HomePage" component={HomePages} />
        <Stack.Screen name="HomeLinked" component={HomeLinked} />
        <Stack.Screen name="jobs" component={jobs} />
        
                <Stack.Screen name="ContentJob" component={ContentJob} />

        <Stack.Screen name="Addnotes" component={Addnotes} />

        <Stack.Screen
          name="Notification"
          component={Notifications}
          options={{ headerShown: false }} />
         <Stack.Screen
          name="SharePost"
          component={SharePosts}/>
           <Stack.Screen
          name="Messagin"
          component={Messagins}
           />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;