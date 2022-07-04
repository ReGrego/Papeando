import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavegacaoStackParams } from '../navigations/stack';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export interface InicialAppProps {
}


export function InicialApp (props: InicialAppProps) {

  

   const [ resultado, setResultado ] = React.useState('');
   const [ email, setEmail ] = React.useState('');
   const [ password, setPassword ] = React.useState('');

   const cadastrar = () => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
         .then(sucesso => ToastAndroid.show('Usuáriocadastrado com sucesso!', ToastAndroid.LONG))
         .catch(erro => {
            console.log(erro.code)
            if (erro.code == 'auth/email-already-in-use')
               ToastAndroid.show('Usuário já existente', ToastAndroid.LONG)
            else
               ToastAndroid.show('Não foi possível criar o usuário', ToastAndroid.LONG)
         });
   }

   const logar =() => {
      const auth = getAuth();
      signInWithEmailAndPassword (auth, email, password)
         .then(sucesso => {
            sucesso.user.uid;
            nav.navigate('SegundaScreen');
         }).catch(erro => {
            setResultado('E-mail ou senha incorretos');
         });
   }

   
   
   type navProps = NativeStackNavigationProp<NavegacaoStackParams, 'Inicial'>
   const nav = useNavigation<navProps>();
    return (
      <View style={styles.container}>
       
        

         <Image
            source={require('../../assets/baloon8.png')}
            style={styles.img}
         /> 
         <Text style = {styles.texto}>Papeando</Text>
         
         <TextInput style={styles.input}
            placeholder= 'E-mail' onChangeText={setEmail}
         />
         <TextInput style={styles.input}
            placeholder= "Senha"onChangeText={setPassword} secureTextEntry
         />

         <View style={{flexDirection: 'column', alignItems:'center'}}>
         <TouchableOpacity style={{marginTop:70, marginBottom:20}} onPress={logar}>
            <Text style={styles.botaotext}>Entrar</Text>
         </TouchableOpacity>
            
         <TouchableOpacity style={{marginTop: 10, marginBottom:320}} onPress={cadastrar}>
            <Text style={styles.botaotext}>Cadastrar</Text>
         </TouchableOpacity>
         </View>
         

         
      </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        
        backgroundColor: '#191970',
        widht: '100%',       
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    img: {
      padding:50,
      resizeMode: 'stretch' ,
      height: 190,
      width:350,
      top: 110,
      alignItems: 'center',
      justifyContent: 'center',
   } ,
    texto: {
        marginBottom: 100,
        color: 'cornflowerblue',
        fontSize: 30,
        top:50,
        marginTop:30,
        fontWeight: 'bold',
        textAlign: 'center', 
     },
     texto2: {
     
       color: 'lavender',
       fontSize: 19,
       top: 60,
       fontWeight: 'bold',
       textAlign: 'center',
       justifyContent: 'center'
     },
     
     input: {
        marginTop: 10,
        top:52,
        padding: 10,
        width: 250,
        height: 40,
        backgroundColor: "lavender",
        fontSize:16, 
        borderRadius: 3
     },
  
     botaotext:{
      color: 'cornflowerblue',
      fontSize: 13,
      textDecorationLine: 'underline',
      alignContent: 'center',
     }  
  
})