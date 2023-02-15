import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'


const RegisterComplaints = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
        
            <View style={styles.Box}>
                <Text style={styles.Text} onPress={() => navigation.navigate('RegisterComplaintsInside')} >Register Complaints</Text> 
                <Image source={require('../../../assets/Images/RegisterComplaints.png')} />
            </View>
            
            <View style={styles.Box}>
                <Text style={styles.Text} onPress={() => navigation.navigate('TrackComplaints')} >Track Complaints</Text>
                <Image source={require('../../../assets/Images/RegisterComplaints.png')} />
            </View>
      
    </SafeAreaView>
    )
}


const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems:"center",
    },
    Box: {
        flexDirection:'row',
        backgroundColor: '#c1f4f4',
        marginBottom:"10@ms",
        alignItems: 'center',
        justifyContent: 'space-around',
        width:"95%",
        marginHorizontal:5,
        borderRadius: 30,
        borderWidth: 2,
        
    },
    Text: {
        fontSize:"25@ms",
        fontWeight: '400',
    }
})

export default RegisterComplaints