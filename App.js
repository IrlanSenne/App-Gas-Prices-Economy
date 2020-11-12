import React, {useState} from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Gasolina from './componentes/gasolina'
import Etanol from './componentes/etanol'
import Btn from './componentes/calcular'
import Resultado from './componentes/resultado'
import ImgResultado from './componentes/imgResultado'

export default function App(){

  const [gasolina,setGasolina]=useState(0)
  const [etanol,setEtanol]=useState(0)
  const [resultado,setResultado]=useState('')

  const calcular=()=>{
    if(!gasolina){              
      alert('Informe o preço do etanol')
      return
    }
    if(!etanol){
      alert('Informe o preço da gasolina')
      return
    }

    let res
    let calc=((gasolina/etanol)*100).toFixed(1)
    if(calc > 70){
      res='Gasolina'
    }else{
      res='Etanol'
    }
    alert('O etanol está custando ' + calc + '% da gasolina. Portanto o recomendado é melhor abastecer com ' + res)
    setResultado(res)
  }

  const limpar = ()=> setResultado('')

  const   setarEtanol=(v)=>{
    limpar()
    setEtanol(v)
  }
  const setarGasolina = (v)=>{
    limpar()
    setGasolina(v)
  }

  return(
    <SafeAreaView style={estilos.principal}>
      <Gasolina aoModificar={setarGasolina}/>
      <Etanol  aoModificar={setarEtanol}/>
      <Btn aoPressionar={calcular}/>
      <Resultado selecionadoHoje={resultado}/>
      <ImgResultado comb={resultado.charAt(0)}/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  principal:{
    padding:10
  }
})