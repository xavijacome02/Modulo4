import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native'
import { Button, ListItem } from "@rneui/base"
import { getAllContacts } from "../rest_client/Contactos"
import { useState,useCallback } from 'react'
import { FAB } from '@rneui/themed';
import {useFocusEffect} from "@react-navigation/native"

export const ContactsList = ({ navigation }) => {
  const [contactsList, setContactsList] = useState([]);

  useFocusEffect(
    useCallback(() => {
      console.log("Recargando lista de contactos...");
      getAllContacts(fnRefreshList);
    }, [])
  );
  const ContactsItem = ({ contacts }) => {
    return <TouchableHighlight onPress={()=>{
      navigation.navigate("ContactsFormNav",{contactParam:contacts});
    }}>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{contacts.nombre} {contacts.apellido}</ListItem.Title>
          <ListItem.Subtitle>{contacts.celular}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableHighlight>
  }
  fnRefreshList = (contacts) => {
    //console.log("Refrescar Lista",contacts);
    setContactsList(contacts);

  }
  return <View style={styles.container}>
    
    <FlatList
      data={contactsList}
      renderItem={({ item }) => { //se barre la lista de contactos ARREGLO
        return <ContactsItem contacts={item} />
      }}
    />
    <FAB
      icon={{ name: 'add', color: 'white' }}
      color="dodgerblue"
      onPress={() => { navigation.navigate("ContactsFormNav",{}); }}
    />

  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});