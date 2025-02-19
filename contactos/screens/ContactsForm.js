import { View, Text, StyleSheet, Alert } from 'react-native'
import { Button, Input, Icon } from "@rneui/base"
import { useState } from 'react'
import { saveContactsRest } from '../rest_client/Contactos'
import { upDateContactsRest,deleteContactRest } from "../rest_client/Contactos"
export const ContactsForm = ({ navigation, route }) => { //route es para recuperar informacion
  let contactRetrieved = route.params.contactParam;
  let isNew = true;

  const confirmDelete = () => {
    Alert.alert("ALERTA",
      "Estas seguro que deseas eliminar?",
      [
        {
          text: "Si",
          onPress:deleteContact 
        },
        {
          text: "No",
        }
      ]
    )
  }

  const deleteContact=()=>{
    console.log("eliminar contacto")
    deleteContactRest({
      id:contactRetrieved.id
    },showMessage)
  }

  if (contactRetrieved != null) {
    isNew = false;
  }
  console.log(isNew, contactRetrieved)

  const [name, setName] = useState(isNew ? null : contactRetrieved.nombre); //si es new es true lo asigna null
  const [surName, setSurName] = useState(isNew ? null : contactRetrieved.apellido);                       // caso contrario le pone el name
  const [phoneNumber, setPhoneNumber] = useState(isNew ? null : contactRetrieved.celular);

  const createContacts = () => {
    console.log("verificar guardar")
    saveContactsRest(
      {
        name: name,
        surName: surName,
        phoneNumber: phoneNumber
      },
      showMessage
    )
  }

  const upDateContact = () => {
    console.log("Actualizando contacto")
    upDateContactsRest({
      id: contactRetrieved.id,
      name: name,
      surName: surName,
      phoneNumber: phoneNumber
    }, 
    showMessage);
  }


  const showMessage = (message) => {
    Alert.alert("INFORMACION", message)
    navigation.goBack();
  }


  return <View style={styles.container}>
    <Input
      value={name}
      placeholder='Ingrese el nombre'
      onChangeText={(value) => {
        setName(value)
      }}
    />
    <Input
      value={surName}
      placeholder='Ingrese el apellido'
      onChangeText={(value) => {
        setSurName(value)
      }}
    />
    <Input
      value={phoneNumber}
      placeholder='Ingrese el numero de telefono'
      onChangeText={(value) => {
        setPhoneNumber(value)
      }}
    />
    <Button radius={"sm"} type="solid" onPress={isNew ? createContacts : upDateContact}>
      GUARDAR
      <Icon name="save" color="white" />
    </Button>

    {
      isNew ? <View></View> : <Button radius={"sm"} type="solid" onPress={confirmDelete}>
        ELIMINAR
        <Icon name="delete" color="white" />
      </Button>
    }


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