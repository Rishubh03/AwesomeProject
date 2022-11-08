import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState } from 'react';

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

const RegisterComplaintsInside = () => {
    const [value, setValue] = useState(null);

    return (
        <View style={styles.WholeContainer}>
            <View style={styles.AllView}>
                <Text style={styles.NameBox}>Name </Text>
                <TextInput
                    placeholder=' Enter Your Name'
                    style={styles.TextBox}
                />
            </View>
            <View style={styles.AllView}>
                <Text style={styles.NameBox}>Mobile No. </Text>
                <TextInput
                    placeholder=' Enter your Pnone number'
                    style={styles.TextBox}
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.AllView}>
                <Text style={styles.NameBox}>Address </Text>
                <TextInput
                    placeholder=' Address'
                    style={styles.TextBox}
                />
            </View>
            <View style={styles.AllView}>
                <Text style={styles.NameBox}>Zone Name </Text>
                <Dropdown
                    data={data}
                    Search
                    labelField='label'
                    valueField='value'
                    placeholder='Zone Name'
                    SearchPlaceholder='Search'
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                    style={styles.TextBox}
                />
            </View>
            <View style={styles.AllView}>
                <Text style={styles.NameBox}>Garden Name </Text>
                <TextInput
                    placeholder='enter Name of garden '
                    style={styles.TextBox}
                />
            </View>
            <View style={styles.AllView}>
                <Text style={styles.NameBox}>Complaints </Text>
                <TextInput
                    placeholder='complaint '
                    style={styles.TextBox}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    WholeContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',

    },
    AllView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#c1f4f4',
        justifyContent: 'space-around',
        borderRadius: 3,
        borderWidth: 3,
    },
    TextBox: {
        borderWidth: 1,
        flex: 1,
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    NameBox: {
        fontSize: 40,
    }

})

export default RegisterComplaintsInside