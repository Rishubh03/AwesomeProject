import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const RegisterComplaints = ({ navigation }) => {
    return (
        <View style={styles.ParentBox}>
            <View style={styles.ChildBox}>
                <Text style={styles.TextStyle} onPress={() => navigation.navigate('RegisterComplaintsInside')} >Register Complaints <Image source={require('../../../assets/Images/RegisterComplaints.png')} /></Text>
            </View>
            <View style={styles.ChildBox}>
                <Text style={styles.TextStyle} onPress={() => navigation.navigate('TrackComplaints')} >Track Complaints <Image source={require('../../../assets/Images/RegisterComplaints.png')} /></Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    ParentBox: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
        maxHeight: '35%'
    },
    ChildBox: {
        backgroundColor: '#c1f4f4',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 2,

    },
    TextStyle: {
        fontSize: 30,
        fontWeight: '400',
    }
})

export default RegisterComplaints