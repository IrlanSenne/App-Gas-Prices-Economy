import React from 'react';
import {  StyleSheet, View, Text, } from 'react-native';

export default props =>{
  return(
    <View style={estilos.bloco}>
        <Text>Melhor combustível: {props.selecionadoHoje}</Text>     
    </View>
  )
}

const estilos = StyleSheet.create({
    bloco:{
        marginBottom:10
    }
})