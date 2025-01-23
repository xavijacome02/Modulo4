import { View, Text, StyleSheet, Alert } from 'react-native'
import { Button, Input, Icon } from "@rneui/base"
import { useState } from 'react'
import { saveLaptopRest, upDateLaptopRest } from "../rest_laptops/Laptops"

export const LaptopsForm = ({ navigation, route }) => {
  let laptopRetriever = route.params.laptopParam;
  let isNew = true;

  if (laptopRetriever != null) {
    isNew = false;
  }
  console.log(isNew, laptopRetriever)
  


  const [marca, setMarca] = useState(isNew ? null : laptopRetriever.marca);
  const [procesador, setProcesador] = useState(isNew ? null : laptopRetriever.procesador);
  const [memoria, setMemoria] = useState(isNew ? null : laptopRetriever.memoria);
  const [disco, setDisco] = useState(isNew ? null : laptopRetriever.disco);

  const createLaptop = () => {
    console.log("validar guardar")
    saveLaptopRest(
      {
        marca: marca,
        procesador: procesador,
        memoria: memoria,
        disco: disco
      },
      showMessage
    )
  }

  const upDateLaptops = () => {
    console.log("Se actualiza laptop")
    upDateLaptopRest({
      id:laptopRetriever.id,
      marca: marca,
      procesador: procesador,
      memoria: memoria,
      disco: disco
    },showMessage);
  }


  const showMessage = () => {
    Alert.alert("INFORMACION", isNew ? "Laptop creado con exito" : "Laptop actualizada")
    navigation.goBack();
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
    <Button radius={"sm"} type="solid" onPress={isNew ? createLaptop : upDateLaptops}>
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