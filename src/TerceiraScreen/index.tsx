import * as React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavegacaoStackParams } from '../navigations/stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface TerceiraAppProps {
}

export function TerceiraApp (props: TerceiraAppProps) {

    type navProps = NativeStackNavigationProp<NavegacaoStackParams, 'TerceiraScreen'>
    const nav = useNavigation<navProps>();

    return(
        <View style={styles.container}>
            <Text style={styles.txt}> Professores disponíveis:</Text>

            <TouchableOpacity style = {styles.prof}>
                <Text style = {styles.txt2}>João da Silva</Text>
            </TouchableOpacity>
            <Text style = {styles.txt3}>
                Língua: Inglês {'\n'}
                Modalidade: Presencial {'\n'}
                Localização: Maceió-AL/ Brasil
            </Text>

            <TouchableOpacity style = {styles.prof2}>
                <Text style = {styles.txt2}>Maria da Silva</Text>
            </TouchableOpacity>
            <Text style = {styles.txt4}>
                Língua: Inglês {'\n'}
                Modalidade: On-line {'\n'}
                Localização: Recife-PE/ Brasil
            </Text>
        </View>
    );
}

    const styles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: '#191970',
            alignItems: 'center',
            justifyContent: 'center'

        },
        txt: {
            color: 'cornflowerblue',
            fontSize:20,
            fontWeight:'bold',
            bottom:250,
        },
        prof: {
            right: 60,
            bottom: 200
        },
        txt2:{
            color: 'cornflowerblue',
            textDecorationLine: 'underline',
            fontSize: 17
        },
        txt3: {
            color: 'cornflowerblue',
            fontSize: 14,
            right: 10,
            bottom:190
        },
        prof2:{
            right: 60,
            bottom: 150
        },
        txt4: {
            color: 'cornflowerblue',
            fontSize: 14,
            right: 10,
            bottom:140
        }
    })

    