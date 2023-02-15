import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/EvilIcons' 


export default function Header() {
	return (
		<View style={styles.container}>
		<Icon 
			name="navicon"
			size={50}
			color="white"
		/>
			<TouchableOpacity>
				<View style={{flexDirection:'row'}}>
					<Text style={{fontWeight:'500',fontSize:26,color:"white"}}>Apna Garden</Text>
				</View>
			</TouchableOpacity>

			<View style={{ flexDirection: 'row' }}>
				
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#01561D',
		
		height: 60,
	},
	title: {
		color: 'white',
		fontWeight: '700',
		fontSize: 25,
	},
	icon:{
		width:200,
		height:150,
		resizeMode:'contain',
	}
})