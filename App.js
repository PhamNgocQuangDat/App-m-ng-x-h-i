import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeLinked from './compoments/HomeLinked'


function Home({}) {
  return (
    <View style={{flex:1}}>

      <HomeLinked/> 
    </View>
  );
}
function Detail(route) {
  return (
    <View>
      <Button title="back"
      onPress ={()=>{
    navigation.navigate('home');
  }}>

      </Button>
      {/* <Lab3b/>  */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;