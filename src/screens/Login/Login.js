import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Button, Image, Input } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';
import Entypo  from 'react-native-vector-icons/Entypo'

const Login = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState(null);
    const [alphabetic, emailonChange] = React.useState(null);
    const [isVisible, setVisible] = useState(true);

    return (
        <SafeAreaView style={styles.Container}>
            <View style={{ marginHorizontal: 5, }}>

                <View style={styles.TitleView}>
                    <Text style={styles.TitleText}>Welcome Back!</Text>
                    <Image source={{uri:"../../../assets/Images/Apna Garden-1.png"}}/>
                </View>

                <View style={styles.EmailAddress}>
                    <Input ontainerStyle={styles.EmailInput}
                        onChangeText={emailonChange}
                        value={alphabetic}
                        placeholder=" Email Address"
                        keyboardType="alphabetic"
                    />
                </View>

                <View style={styles.Password}>
                    <Input ontainerStyle={styles.PasswordInput}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder=" Password"
                        keyboardType="alphabetic"
                        secureTextEntry={isVisible}
                    />
                </View>

                <View style={styles.ForgotPassword}>
                    <Text onPress={() => someAction()} style={styles.Forgot}>Forgot your password?</Text>
                </View>

                <View style={styles.OtherOption}>
                    <Text style={styles.OtherLogin}>Or login using social media</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>

                    <Button title="Facebook"
                        type='outline'
                        titleStyle={{ color: '#000000' }}
                        containerStyle={styles.FacebookButton} 
                    />

                    <Button title="Google"
                        type='outline'
                        titleStyle={{ color: '#000000' }}
                        containerStyle={styles.GoogleButton} />

                </View>
                <View style={styles.LoginButton}>
                    <Button title="Login" type='outline' titleStyle={{ color: '#fff' }} containerStyle={{ backgroundColor: 'black', }}
                        onPress={() => navigation.navigate('Interface1')}
                    />
                </View>

                <View style={styles.NewUser}>
                    <Text onPress={() => someAction()} style={styles.New}>New Here? Register</Text>
                </View>

            </View>
        </SafeAreaView>
    )
}


const styles = ScaledSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#C1F4F4',
        justifyContent: 'center',
    },
    TitleView: {
        marginBottom: 10,
        alignItems:'center',
    },
    TitleText: {
        fontSize: "25@ms",
        fontWeight: "400",
        fontStyle: "normal",

    },
    EmailAddress: {

    },
    EmailInput: {
        marginLeft: 0,
        marginBottom: 5,
    },
    Password: {
        marginBottom: 5,
    },
    ForgotPassword: {
        marginLeft: 0,

    },
    Forgot: {
        fontSize: "16@ms",
        marginBottom: 5,
        fontWeight: "400",
        lineHeight: "18@ms",
        fontStyle: "normal",
    },
    OtherLogin: {
        marginTop: 10,
        fontSize: "16@ms",
        marginBottom: 5,
        fontWeight: "400",
        lineHeight: "18@ms",
        fontStyle: "normal",
    },
    OtherOption: {
        marginLeft: 0,
        marginBottom: 10
    },
    FacebookButton: {
        maxWidth: "200@s",
        borderWidth: 2,
        borderRadius: 20,
    },
    GoogleButton: {
        maxWidth: "200@s",
        borderWidth: 2,
        borderRadius: 20,
    },
    LoginButton: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    NewUser: {
        alignItems: 'center',
    },
    New: {
        fontSize: 20
    },
})


export default Login