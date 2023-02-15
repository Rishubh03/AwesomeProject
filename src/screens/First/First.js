import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';
import { ScaledSheet } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'

const First = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.icon}
                source={require('../../../assets/first-page-logo.png')}
            />
            <Text style={styles.welcomeText}>Welcome to Apna Garden</Text>

            <Text style={{fontWeight:'400',fontSize:13}}>Lorem ipsum dolor sit amet,</Text>
            <Text style={{fontWeight:'400',fontSize:13}}>consectetur adipiscing elit. Interdum</Text>
            <Text style={{fontWeight:'400',fontSize:13}}>dictum tempus, interdum at dignissim</Text>
            <Text style={{fontWeight:'400',fontSize:13}}>metus. Ultricies sed nunc.</Text>

            <Button title="Get Started" type='outline' titleStyle={{ color: '#fff' }} containerStyle={{ backgroundColor: '#50C2C9',width:'90%',marginVertical:25 }}
                onPress={() => navigation.navigate('Login')}
            />

        </SafeAreaView>

    );
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#E6E6E6',
    },
    welcomeText: {
        fontWeight: '600',
        fontSize: 18,
        marginVertical:20,
    },
    icon: {
        marginVertical: 20,
        width: 200,
        height: 170,
    },

})


export default First