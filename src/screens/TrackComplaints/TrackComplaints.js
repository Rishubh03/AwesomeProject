import { View, Text, SafeAreaView, StatusBar, } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'


const TrackComplaints = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <Text>TrackComplaints</Text>
        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    }
});
export default TrackComplaints