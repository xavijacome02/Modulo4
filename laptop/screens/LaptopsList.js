import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Button, ListItem, Icon } from "@rneui/base"
import { FAB } from '@rneui/themed';
import { useState } from 'react'
import { getAllLaptops } from '../rest_laptops/Laptops'

export const LaptopsList = ({navigation}) => {
  const [laptopsList, setLaptopsList] = useState();
  const LaptopsItem = ({ laptops }) => {
    return <ListItem.Swipeable
      leftWidth={80}
      rightWidth={90}
      minSlideWidth={40}
      leftContent={(action) => (
        <Button
          containerStyle={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#f4f4f4",
          }}
          type="clear"
          icon={{
            name: "archive-outline",
            type: "material-community",
          }}
          onPress={action}
        />
      )}
      rightContent={(action) => (
        <Button
          containerStyle={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#f4f4f4",
          }}
          type="clear"
          icon={{ name: "delete-outline" }}
          onPress={action}
        />
      )}
    >
      <Icon name="label-important-outline" type="material" />
      <ListItem.Content>
        <ListItem.Title>{laptops.marca} {laptops.procesador}</ListItem.Title>
        <ListItem.Subtitle>{laptops.memoria} {laptops.disco}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>

  }

  fnRefreshList = (laptops) => {
    //console.log("Refrescar Lista",laptops);
    setLaptopsList(laptops);

  }
  return <View style={styles.container}>
    <Text>LISTA DE LAPTOPS</Text>
    <Button
      title="CONSULTAR"
      onPress={() => {
        getAllLaptops(fnRefreshList);
      }}
    />
    <FlatList
      data={laptopsList}
      renderItem={({ item }) => { //se barre la lista de laptops ARREGLO
        return <LaptopsItem laptops={item} />
      }}
    />
    <FAB
      icon={{ name: 'add', color: 'white' }}
      color="dodgerblue"
      onPress={() => { navigation.navigate("LaptopsFormav"); }}
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