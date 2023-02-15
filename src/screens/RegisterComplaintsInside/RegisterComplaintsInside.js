import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image,ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState } from 'react';
import { Input, Button} from 'react-native-elements'
import { ScaledSheet } from 'react-native-size-matters';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const RegisterComplaintsInside = ({ navigate }) => {
    const [value, setValue] = useState(null);

    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView>
        <View style={{paddingTop:30,alignItems:'center'}}> 
        <Text style={styles.titleText}>Register your Complaint!</Text>
            <Image
                style={styles.icon}
                source={require('../../../assets/first-page-logo.png')}
            />
        </View>

            <Text style={styles.Label}>Name</Text>
            <Input
                placeholder='Enter Your Name'
                style={styles.TextBox}
            />

            <Text style={styles.Label}>Mobile No.</Text>
            <Input
                placeholder='Enter your Phone number'
                style={styles.TextBox}
                keyboardType='numeric'
            />

            <Text style={styles.Label}>Address</Text>
            <Input
                placeholder='Enter your Address'
                style={styles.TextBox}
            />

            <Text style={styles.Label}>Zone Name</Text>
            <Dropdown
                data={data}
                Search
                labelField='label'
                valueField='value'
                placeholder='Select your Zone'
                SearchPlaceholder='Search'
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                style={styles.TextBox}
            />

            <Text style={styles.Label}>Garden Name </Text>
            <Input
                placeholder='Select the garden '
                style={styles.TextBox}
            />

            <Text style={styles.Label}>Complaints </Text>
            <Input
                placeholder='complaint '
                style={styles.TextBox}
            />
            <View style = {{alignItems:'center'}}>
                <Button title="Register" type='outline' titleStyle={{ color: '#fff' }} containerStyle={{ backgroundColor: '#50C2C9', width: '90%', marginVertical: 10 }}
                // onPress={handleFormSubmit}
                />
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = ScaledSheet.create({
    Container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#E6E6E6',
        paddingHorizontal: 5,
    },
    Label: {
        fontSize: 22,
        fontWeight: '400',
        marginLeft: 5,
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

})

export default RegisterComplaintsInside