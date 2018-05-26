import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={{position:'absolute',top:30,bottom:15,left:15,right:15,}}
         initialRegion={{
            latitude:-8.436292,
            longitude:115.329697,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} >
        <MapView.Marker
          coordinate={{
            latitude: -8.436292,
            longitude: 115.329697,
            }}
             title="madawa home"
             description="wellcome to my home" />
        </MapView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
