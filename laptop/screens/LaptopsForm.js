import { View, Text, StyleSheet, Alert } from 'react-native'
import { Button, Input, Icon } from "@rneui/base"
import { useState } from 'react'
import {saveLaptopRest} from "../rest_laptops/Laptops"

export const LaptopsForm = ({navigation}) => {
  const [marca, setMarca] = useState();
  const [procesador, setProcesador] = useState();
  const [memoria, setMemoria] = useState();
  const [disco, setDisco] = useState();
  const saveLaptop=()=>{

    console.log("validar guardar")
    navigation.goBack();
    saveLaptopRest(
      {
        marca:marca,
        procesador:procesador,
        memoria:memoria,
        disco:disco
      },
      showMessage()
    )
  }
  const showMessage=()=>{
    Alert.alert("INFORMACION","Laptop creado con exito")
  }

  return <View style={styles.container}>
    <Input
      value={marca}
      placeholder='Ingrese la marca'
      onChangeText={(value) => {
        setMarca(value)
      }}
    />
    <Input
      value={procesador}
      placeholder='Ingrese el procesador'
      onChangeText={(value) => {
        setProcesador(value)
      }}
    />
    <Input
      value={memoria}
      placeholder='Ingrese la capacidad de memoria'
      onChangeText={(value) => {
        setMemoria(value)
      }}
    />
    <Input
      value={disco}
      placeholder='Ingrese el disco'
      onChangeText={(value) => {
        setDisco(value)
      }}
    />
    <Button radius={"sm"} type="solid" onPress={saveLaptop}>
      GUARDAR
      <Icon name="save" color="white" />
    </Button>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});