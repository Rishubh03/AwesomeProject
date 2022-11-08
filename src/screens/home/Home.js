import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';

const Home = () => {
	return (
		<View style = {styles.container}>
			<Text>Login to Continue</Text> 
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		paddingTop: StatusBar.currentHeight, 
		flex:1, 
		justifyContent:'center',
		alignItems:'center',
	}
})

export default Home;
