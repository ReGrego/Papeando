import * as React from 'react';
import {Picker} from '@react-native-picker/picker';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavegacaoStackParams } from '../navigations/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getAuth, signOut } from 'firebase/auth';

export interface SegundaAppProps {
}

export function SegundaApp (props: SegundaAppProps) {

  type navProps = NativeStackNavigationProp<NavegacaoStackParams, 'SegundaScreen'>
  const nav = useNavigation<navProps>();

             
  const auth = getAuth();
  const [ resultado, setResultado ] = React.useState('');

    return (
      <View style={styles.container}>
        
        <Image 
            source={require('../../assets/User.png')}
            style={styles.img}
          />
         <Text style={styles.texto}>Seja bem-vindo!</Text>
         <TouchableOpacity onPress={() => nav.navigate('QuartaScreen')}>  
            <Text style={styles.botao}>editar meus dados</Text>
         </TouchableOpacity>

         <Text style={styles.texto2}>Qual língua você quer praticar agora?</Text>

         <Picker style={styles.picker}>
            <Picker.Item label="--selecione a língua--" value=""/>
            <Picker.Item label="Inglês" value="ingles"/>
            <Picker.Item label="Espanhol" value="espanhol"/>
            <Picker.Item label="Francês" value="frances"/>
            <Picker.Item label="Alemão" value="alemao"/>
            <Picker.Item label="Italiano" value="italiano"/>
            <Picker.Item label="Mandarim" value="mandarim"/>
         </Picker>

         <Text style={styles.texto3}>Selecione o modelo de aula:</Text>
  
         <TouchableOpacity style={styles.botao2}>
            <Text style={styles.txt2}>On-line</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.botao3}>
            <Text style={styles.txt3}>Presencial</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => nav.navigate('TerceiraScreen')}>
            <Text style={styles.textbutton}> Próximo </Text>
         </TouchableOpacity>

         <TouchableOpacity style = {styles.sair} onPress={() => {
            signOut(auth);
            setResultado('Deslogado')
          }}>
            <Text style = {styles.txtsair}>Sair</Text> 
            </TouchableOpacity>                    
      
      </View>
    );
}

const styles = StyleSheet.create({
   container: {
      flex:1,
      backgroundColor: '#191970',
      width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
    },    
    img:{
      resizeMode: 'stretch' ,
      height:120,
      width:140,
      marginTop:30,
      justifyContent: 'center',
      alignItems: 'center'
    },
   texto:{
      flex:1,
      color: 'cornflowerblue', 
      fontSize: 23, 
      fontWeight: 'bold',
      justifyContent: 'center',
      textAlign: 'center',   
    },
    botao:{
      color: 'cornflowerblue',
      fontSize: 12,
      textDecorationLine: 'underline',
      bottom: 180 
    },
   picker: {
      bottom:190,
      height: 20,
      width: 200,
      marginBottom: 10      
    },
    texto2: {
      bottom: 120,
      color: "cornflowerblue",
      fontSize: 18,
      textAlign: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    texto3:{
      color: "cornflowerblue",
      fontSize: 18,
      textAlign: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    botao2: {
      backgroundColor: "cornflowerblue",
      height:20,
      width: 160,
      marginTop:10,
      marginBottom:10,
      alignItems: 'center',
      justifyContent: 'center',  
    },
    botao3:{
      backgroundColor: 'cornflowerblue',
      height: 20,
      width: 160,
      marginTop:10,
      marginBottom:10,
      alignItems: 'center',
      justifyContent: 'center',  
    },
    txt2:{
      fontSize: 14,
      fontWeight: 'bold',
      color: "#191970"
    },
    txt3: {
      color: "#191970",
      fontWeight: "bold",
      fontSize: 14, 
    },
    button:{
      flex:1,
      height: 30,
      width: 70,
      top:70,
      alignItems: 'center',
    },
    textbutton: {
      color: 'cornflowerblue',
      fontSize: 13,
      textDecorationLine: 'underline',
      alignContent: 'center',
    },
    sair: {
      bottom: 60
    },
    txtsair:{
      color: 'cornflowerblue',
      fontSize: 14,
      fontWeight: 'bold'
    }


});




