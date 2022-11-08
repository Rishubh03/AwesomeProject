import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, ScrollView, StatusBar, TextInput, Button } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message';
import toastConfig from '../styles'

const SignInScreen = () => {
	const navigation = useNavigation()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const clearTextInput = () => {
		setEmail('')
		setPassword('')
	}

	const handleFormSubmit = ()=>{
		if (email && password) {
			console.log("Login Success")
			const formData = { email, password }
			console.log(formData)
			clearTextInput()
			Toast.show({
			  type: 'done',
			  position: 'top',
			  topOffset: 0,
			  text1: "Login Success"
			})
			navigation.navigate('Home')
		      } else {
			console.log("All fields are Required")
			Toast.show({
			  type: 'warning',
			  position: 'top',
			  topOffset: 0,
			  text1: "All fields are Required"
			})
		      }
	}

	return (
		<SafeAreaView>
			 <Toast config={toastConfig} />
			<ScrollView>
				<View style={{ padding: StatusBar.currentHeight, }}>
					<View style={{ alignSelf: 'center', marginBottom: 10 }}>
						<MaterialIcon name='shopping-bag' color='purple' size={100} />
					</View>

					<View style={[styles.inputWithLabel, { marginBottom: 10 }]}>
						<Text style={styles.labelText}>Email</Text>
						<TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Write Your Email" onPress={console.log(email)} keyboardType='email-address' />
					</View>

					<View style={styles.inputWithLabel}>
						<Text style={styles.labelText}>Password</Text>
						<TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Write Your Password" onPress={console.log(password)} secureTextEntry={true} />
					</View>

					<View style={{ width: 200, alignSelf: 'center', margin: 20 }}>
						<Button title='Login' onPress={handleFormSubmit} color='purple' />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = ScaledSheet.create({
	inputWithLabel: {

	},
	labelText: {

	},
	input: {

	}
})

export default SignInScreen;
