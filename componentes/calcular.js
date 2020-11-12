import React from 'react';
import {  StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default props =>{
  return(
    <View style={estilos.bloco}>
       
        <TouchableHighlight
            style={estilos.btn}
            onPress={props.aoPressionar}
        >
             <Text style={estilos.txtBtn}>calcular</Text>
        </TouchableHighlight>
           
    </View>
  )
}

const estilos = StyleSheet.create({
    bloco:{
        marginBottom:10
    },
    btn:{
        backgroundColor:'#800',
        justifyContent:'center',
        alignItems:'center',        
        borderRadius:10,
        padding:8,
      
      
    },
    txtBtn:{
        textTransform:'uppercase',
        color:'#fff',
        letterSpacing:2,
        fontWeight:'bold'
    }
})