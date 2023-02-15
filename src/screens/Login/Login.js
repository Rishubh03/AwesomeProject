import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { Button, Image, Input } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo'

import { useLoginUserMutation } from '../../../services/userAuthApi'
import { storeToken } from '../../../services/AsyncStorageService';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const clearTextInput = () => {
        setEmail('')
        setPassword('')
    }

    const [loginUser] = useLoginUserMutation()

    const handleFormSubmit = async () => {
        const formData = { email, password }
        const res = await loginUser(formData)
        if (res.data) {
            // console.log("Response Data", res.data)
            await storeToken(res.data.token)  // Store Token in Storage
            clearTextInput()
            navigation.navigate('Interface1')
        }
        if (res.error) {
            // console.log("Response Error", res.error.data.errors)
            console.log(res.error)
        }
    }

    return (
        <SafeAreaView style={styles.Container}>

            <Text style={styles.titleText}>Welcome Back!</Text>
            <Image
                style={styles.icon}
                source={require('../../../assets/first-page-logo.png')}
            />

            <Input containerStyle={styles.EmailInput}

                value={email}
                onChangeText={setEmail}
                placeholder=" Email Address"
            />
            <Input containerStyle={styles.PasswordInput}
                value={password}
                onChangeText={setPassword}
                placeholder=" Password"
                secureTextEntry={true}
            />

            <TouchableWithoutFeedback onPress={() => { navigation.navigate("PasswordReset") }}>
                <Text style={styles.Forgot}>Forgot your password?</Text>
            </TouchableWithoutFeedback>

            <Button title="Login" type='outline' titleStyle={{ color: '#fff' }} containerStyle={{ backgroundColor: '#50C2C9', width: '90%', marginVertical: 10 }}
                onPress={handleFormSubmit}
            />

            <Text style={styles.socialLogin}>Or login using social media</Text>


                <Button 
                    title="Sign In with Facebook"
                    type='outline'
                    titleStyle={{ color: '#FFF'}}
                    containerStyle={styles.facebookButton}
                />

                <Button 
                    title="Sign In with Google"
                    type='outline'
                    titleStyle={{ color: '#FFF' }}
                    containerStyle={styles.googleButton} 

                    />

            <TouchableWithoutFeedback onPress={() => { navigation.navigate("Register") }}>

                <Text onPress={() => { navigation.navigate("Register") }} style={styles.register}>Don’t have an account ? Sign Up</Text>

            </TouchableWithoutFeedback>


        </SafeAreaView>
    )
}


const styles = ScaledSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#E6E6E6',
        paddingHorizontal: 10,
    },

    icon: {
        marginVertical: 20,
        width: 200,
        height: 170,
    },

    titleText: {
        fontSize: "18@ms",
        fontWeight: "600",
        fontStyle: "normal",

    },

    Forgot: {
        fontSize:'16@ms',
        fontWeight:'600',
        marginVertical:10,
    },

    socialLogin: {
        fontSize:'16@ms',
        fontWeight:'500',
        marginVertical:10,
    },
    
    facebookButton: {
        width:'90%',
        borderRadius: 15,
        backgroundColor:'blue',
        marginBottom:15,
    },
    googleButton: {
        width:'90%',        
        borderRadius: 15,
        backgroundColor:'red'
    },

    LoginButton: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    register: {
        fontSize:'16@ms',
        fontWeight:'600',
        marginVertical:10,
    },
})


export default Login