import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="pig-variant-outline" size={24} color="white" />
      <Text style={styles.text}>Calculadora de Juros</Text>
      <MaterialCommunityIcons name="pig-variant-outline" size={24} color="white" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height:80,
        backgroundColor:'#3F51B5',
        textAlign:'center',
        marginBottom:30,
        justifyContent:'space-around',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        
    },
    text:{
        textAlign:'center',
        fontSize:24,
        color:'white',
        textTransform:'uppercase'
       
    }
})