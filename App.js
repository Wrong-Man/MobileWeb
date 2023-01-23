import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginButton from './src/components/LoginButton';
import TextInputEmail from './src/components/TextInputEmail';
import Menu from './src/components/Menu';
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#dbe4f3'}}>
      <StatusBar backgroundColor={'#dbe4f3'} barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
        }}>
        <Image
          source={require('./src/images/android.png')}
          style={{width: 200, height: 200}}
        />
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>
          LOGIN<Text style={{color: 'red'}}>PROJECT</Text>
        </Text>
        <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 18}}>
          Login
        </Text>
      </View>

      <TextInputEmail
        state={email}
        set={setEmail}
        icon="envelope"
        placeholder="Masukkan username/e-mail"
        isPassword={false}
      />
      <TextInputEmail
        state={password}
        set={setPassword}
        icon="lock"
        placeholder="Masukkan password"
        isPassword={true}
      />

      <LoginButton text="Login" color="red" />

      <Menu signupText="Daftar" forgotPasswordText="Lupa Password?" />
    </ScrollView>
  );
};

export default App;
