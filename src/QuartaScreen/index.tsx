import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Button, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavegacaoStackParams } from '../navigations/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';


export interface QuartaAppProps {
}

export function QuartaApp (props: QuartaAppProps) {

    type navProps = NativeStackNavigationProp<NavegacaoStackParams, 'QuartaScreen'>
    const nav = useNavigation<navProps>();

    const [image, setImage] = useState<any>(null);

  const pickImage = async () => {

    const permissao = await ImagePicker.requestCameraPermissionsAsync();
    
    if (permissao.granted) {
      const resultado = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1,1],
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      })
      
      if (!resultado.cancelled) {
      setImage(resultado.uri);
      }
      console.log(resultado)
    } else {
      ToastAndroid.show('É necessário permissão da câmera', ToastAndroid.LONG);
    }

    return (
      <RootSiblingParent>
      <View style={styles.container}>
        
          {image && <Image source={{uri:image}} style={styles.img}/> }
         <TouchableOpacity style={styles.botao} onPress={pickImage}>
           
          </TouchableOpacity>
         <Text style={styles.txt2}> Alterar nome de usuário:</Text>
         <TextInput style={styles.input}
            placeholder= "Nome"
          />
         <Text style={styles.txt2}> Alterar e-mail:</Text>
         <TextInput style={styles.input}
            placeholder= "E-mail"
          />
         <Text style={styles.txt2}> Alterar senha:</Text>
         <TextInput style={styles.input}
            placeholder= "Senha"
          />
          <TouchableOpacity style={styles.botao2}>
            <Text style={styles.txtbutton2}>Confirmar</Text>
          </TouchableOpacity>
      </View>
      </RootSiblingParent>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#191970',
      alignItems: 'center',
      justifyContent: 'center'

    },
    img:{
      resizeMode: 'stretch' ,
      height:120,
      width:140,
      marginTop:30,
      justifyContent:'center',
      alignItems: 'center'
    },
    txt:{
      color: 'cornflowerblue',
      fontSize: 20,
      textDecorationLine: 'underline',
      marginTop: 20,
      marginBottom:20,
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center'
    },
    txt2: {
      color: 'cornflowerblue',
      fontSize: 15,
      justifyContent:'flex-start',
      marginTop: 30,
      marginBottom: 10

    },
    input: {
      backgroundColor: "lavender",
      height: 30,
      width: 260,
      marginBottom: 20

    },
    botao: {
      height: 30,
      width: 60,
      marginTop: 35,
      justifyContent: 'center',
      alignItems: 'center'

    },
    txtbutton: {
      color: 'cornflowerblue',
      textDecorationLine: 'underline',
      fontSize: 13,
      fontWeight: 'bold',
      height:60,
      width: 150
    },
    botao2:{
      marginTop:50,
      marginBottom:200
    },
    txtbutton2:{
      color: 'cornflowerblue',
      fontSize:13,
      textDecorationLine: 'underline'
    }
})

}



