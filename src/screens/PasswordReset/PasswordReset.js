import { View, StyleSheet, StatusBar, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSendPasswordResetEmailMutation } from '../../../services/userAuthApi';
import { Text, Input, Button } from 'react-native-elements'


const PasswordReset = ({navigation}) => {
  const [email, setEmail] = useState("")
  const clearTextInput = () => {
    setEmail('')
  }
  const [sendPasswordResetEmail] = useSendPasswordResetEmailMutation();

  const handleFormSubmit = async () => {
    const formdata = { email }
    const res = await sendPasswordResetEmail(formdata)
    if (res.data) {
      clearTextInput()
    }
    if (res.error) {
      clearTextInput()
      console.log(res.error)
    }
  }
  return (
    <SafeAreaView style={styles.Container}>

      <Text style={styles.titleText}>Reset Password</Text>
      <Input
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Please enter a valid Email Address"
        keyboardType='email-address'
      />

      <Button title="Send" type='outline' titleStyle={{ color: '#fff' }} containerStyle={{ backgroundColor: '#50C2C9', width: '90%', marginVertical: 10, borderRadius: 25 }}
        onPress={handleFormSubmit}
      />

      <Text style={{ fontWeight: '600', alignSelf: 'center', marginVertical: 10, fontSize: 16 }}>Or</Text>

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
        <Text style={{ fontWeight: '600', alignSelf: 'center', marginVertical: 10, fontSize: 16, color:'blue' }}>Go Back to Login</Text>
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

  titleText: {
    fontSize: "22@ms",
    fontWeight: "600",
    fontStyle: "normal",
    marginBottom: 20,
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

export default PasswordReset