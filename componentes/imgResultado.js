import React from 'react';
import {  StyleSheet, View, Image, Text } from 'react-native';

export default props =>{
  return(
    <View style={estilos.bloco}>
    {
      props.comb == '' ?
       <Image
        source={require('../assets/vazio.jpg')}
        style={estilos.bomba}
      />
      :
        props.comb == 'G' ?
        <Image
        source={require('../assets/gasolina.jpg')}
        style={estilos.bomba}
      />
      :
      <Image
        source={require('../assets/etanol.jpg')}
        style={estilos.bomba}
      />
    }
     
        
    </View>
  )
}

const estilos = StyleSheet.create({
    bloco:{
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center'
    },
    txt:{
        borderColor:'#000',
        borderWidth:2,
        borderRadius:10,
        marginTop:5
    },
    bomba:{
      resizeMode:'stretch'
    }
})