import { View, Text, Image, SafeAreaView, Dimensions, TextInput, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { Button, Input, LinearProgress } from 'react-native-elements';
import { ScaledSheet } from 'react-native-size-matters';
import React, { useState } from 'react'
import { color } from 'react-native-elements/dist/helpers';
import { useRegisterUserMutation } from '../../../services/userAuthApi';
import { storeToken } from '../../../services/AsyncStorageService';

const Register = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")



    const clearTextInput = () => {
        setName('')
        setEmail('')
        setPassword('')
        setPassword2('')
    }

    const [registerUser] = useRegisterUserMutation()

    const handleFormSubmit = async () => {
        const formData = { name, email, password, password2 }
        const res = await registerUser(formData)
        if (res.data) {
            await storeToken(res.data.token)  // Store Token in Storage
            clearTextInput()
            navigation.navigate('Login')
        }
        if (res.error) {
            console.log(res.error);
        }
    }
    return (
        <SafeAreaView style={styles.Container}>

            <Text style={styles.titleText}>Welcome Onboard!</Text>

            <Input
                placeholder=" Enter your full name"
                value={name} onChangeText={setName}
                containerStyle={{}}
            />

            <Input
                placeholder=" Enter your email"
                value={email}
                onChangeText={setEmail}
                autoCorrect={true}
                containerStyle={{}}
            />

            <Input
                placeholder=" Enter password"
                autoCorrect={true}
                value={password}
                onChangeText={setPassword}
                containerStyle={{}}
                secureTextEntry={true}
            />

            <Input
                placeholder=" Confirm Password"
                value={password2}
                onChangeText={setPassword2}
                autoCorrect={true}
                containerStyle={{}}
                secureTextEntry={true}
            />

            <Button title="Register" type='outline' titleStyle={{ color: '#fff' }} containerStyle={{ backgroundColor: '#50C2C9', width: '90%', marginVertical: 10 }}
                onPress={handleFormSubmit}
            />

            <Text style={{fontWeight:'600', alignSelf: 'center',marginVertical:10, fontSize:16 }}>Or</Text>

            <Button
                title="Sign In with Facebook"
                type='outline'
                titleStyle={{ color: '#254897' }}
                containerStyle={styles.facebookButton}
            />

            <Button
                title="Sign In with Google"
                type='outline'
                titleStyle={{ color: '#DB3F32' }}
                containerStyle={styles.googleButton}

            />

            <TouchableWithoutFeedback onPress={() => { navigation.navigate("Login") }}>
                <Text style={{fontWeight:'600', alignSelf: 'center',marginVertical:10, fontSize:16}}>Already have an account? Sign In</Text>
            </TouchableWithoutFeedback>
            
        </SafeAreaView >
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
    titleText: {
        fontSize: "18@ms",
        fontWeight: "600",
        fontStyle: "normal",
    },
    
    facebookButton: {
        width: '90%',
        borderRadius: 15,
        backgroundColor: '#9EACCF',
        marginBottom: 15,
    },
    googleButton: {
        width: '90%',
        borderRadius: 15,
        backgroundColor: '#ECB6B5'
    },

})
export default Register