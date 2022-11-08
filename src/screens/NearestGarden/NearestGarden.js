import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import React from 'react';

const NearestGarden = () => {
  return (
    <View style={styles.WholeMapStyle}>
      <MapView style={styles.MapStyle}
        region={{
          latitude: 21,
          longitude: 79,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      ></MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  WholeMapStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MapStyle: {
    width: '100%',
    height: '100%',
  }

})

export default NearestGarden