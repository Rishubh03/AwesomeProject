import { View, Text, StyleSheet, TextInput, Alert, render } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';


export const Register = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [tc, setTc] = useState(null);

    const clearTextInput = () => {
        setName('')
        setEmail('')
        setPassword('')
        setPassword2('')
        setTc(null)
      }
    return (
        <SafeAreaView style={styles.Container}>
            <View style={{ marginHorizontal: 5, }}>
                <Text style={styles.Title}>Register on Apna Garden App</Text>
                <Text style={styles.ContentText}>Create an account,{'\n'}We can't wait to have you.</Text>

                <View>
                    <Input
                        containerStyle={{
                            borderWidth: 0,
                        }}
                        placeholder="Email address"
                        underlineColorAndroid="transparent"
                    />

                    <Input
                        containerStyle={{
                            borderWidth: 0,
                        }}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid="transparent"
                    />
                </View>

                <Text style={styles.ContentText}>Or Register using</Text>

                <View style={styles.AuthButton}>
                    <Button
                        title="Facebook" type="outline" containerStyle={{ backgroundColor: "#0000ff" }} titleStyle={{ color: "white", fontFamily: 'cosmicsans', }}
                        onPress={() => Alert.alert('Register with Facebook')}
                    />
                    <Button
                        title="Google" type="outline" containerStyle={{ backgroundColor: "#fff" }} titleStyle={{ color: "black", fontFamily: 'cosmicsans', }}
                        onPress={() => Alert.alert('Register with Google')}
                    />
                </View>

                <View style={styles.RegisterButton}>
                    <Button
                        title="Register" type="outline" containerStyle={{ backgroundColor: "#fff" }} titleStyle={{ color: "black" }}
                        onPress={() => navigation.navigate('Welcome')}
                    />
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = ScaledSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#C1F4F4',
        justifyContent: 'center',
    },

    Title: {
        marginLeft: 0,
        fontSize: "20@ms",
        fontWeight: "400",
        
    },

    ContentText: {
        marginLeft: 0,
        
        fontSize: "16@ms",
        fontWeight: "400",
        
        marginVertical: 20,
    },

    RegisterButton: {
        marginBottom: 10,
    },
    AuthButton: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 15
    },

});
export default Register