import * as React from 'react';
import {  Button,View, Text } from 'react-native';

function Main({navigation}) {
    return (
      <View style={{ flex: 1,backgroundColor: '#A3CAA2', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Valeriano Calológio</Text>
        <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      </View>
    );
  }
export default Main