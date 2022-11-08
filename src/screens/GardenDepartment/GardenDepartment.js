import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const GardenDepartment = () => {
    return (
        <View style={styles.Parent} >
            <View style={styles.Child}>
                <Text style={styles.Textin} >Commissioner</Text>
            </View>
            <View style={styles.Child}>
                <Text style={styles.Textin}>Additional Commissioner</Text>
            </View>
            <View style={styles.Child}>
                <Text style={styles.Textin}>Commissioner</Text>
            </View>
            <View style={styles.Child}>
                <Text style={styles.Textin}>Junior Engineer</Text>
            </View>
            <View style={styles.Child}>
                <Text style={styles.Textin}>Garden Inspector</Text>
            </View>
            <View style={styles.Child}>
                <Text style={styles.Textin}>Civil Enginner Assistant</Text>
            </View>
            <View style={styles.Child}>
                <Text style={styles.Textin}>Garden Supervisor/Zone Coodinator</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-evenly',
        maxHeight: '90%',

    },
    Child: {
        width: '100%',
        height: '5%',
        backgroundColor: '#C1F4F4',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
    },
    Textin: {
        fontSize: 25,
        fontWeight: '500',
    },

})

export default GardenDepartment