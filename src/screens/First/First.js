import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';
import { ScaledSheet } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign  from 'react-native-vector-icons/AntDesign'

const First = ({ navigation }) => {
    return (
    <SafeAreaView style = {styles.Page}>
        <ScrollView keyboardShouldPersistTaps='handled'>
            <View >
            <View style={styles.LoginButton}>
                <Button title="Login" type='outline' titleStyle={{ color: '#000' }} containerStyle={{ backgroundColor: 'white' }}
                    onPress={() => navigation.navigate('Login')}/>
            </View>
            <View style={styles.SignupButton}>
                <Button title="Register" type='outline' titleStyle={{ color: "#000" }} containerStyle={{ backgroundColor: "white" }}
                    onPress={() => navigation.navigate('Register')} />
            </View>

            </View>
            </ScrollView>
    </SafeAreaView>

    );
}

const styles = ScaledSheet.create({
    Page: {
        flex:1,
        backgroundColor: '#C1f4f4',
        paddingTop: StatusBar.currentHeight,

    },
    Circle: {
        marginLeft: 150,
        marginTop: -250,
    },
    SideImage: {
        marginLeft: 300,
        marginTop: -200,
        marginBottom: 80,
    },
    LoginButton: {
        marginBottom: 10,
        maxWidth: "200@ms",
        maxHeight:"50@ms"
    },
    SignupButton: {
        maxWidth: "200@ms",
        maxHeight:"50@ms"
    },

})


export default First