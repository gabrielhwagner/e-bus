import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Login</Text>
      <Button title="Teste" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}
