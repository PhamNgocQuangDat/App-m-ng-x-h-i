import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeLinked from './compoments/HomeLinked'
// import ManageMyWork from './compoments/ManageMyWork'
// import Messagin from './compoments/Messagin'
import SharePost from './compoments/SharePost'
function Home({navigation}) {
  return (
    <View style={{flex:1}}>

      <HomeLinked/> 

      <Button title="Manage my work"
  onPress ={()=>{
    navigation.navigate('Manage my work');
  }}>
  </Button>

    </View>
  );
}


function Detail({navigation,route}) {
  return (
    <View >  
    {/* <ManageMyWork/> */}
    {/* <Messagin/> */}
     <SharePost/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Manage my work" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;