import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button, Input} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context'
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Separator = () => (
    <View style={styles.separator} />
);


const Welcome = ({ navigation }) => {
    const [name] = useState("");

    return (
        <SafeAreaView style={styles.WelcomePage}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Let's Personalize Your Experience</Text>
                </View>

                <View>
                    <Text style={styles.content}>What can we call you? Could be your name, a nickname or something funny.</Text>
                </View>

                <View>
                    <Input
                         leftIcon={
                            <AntDesign
                              name='user'
                              size={24}
                              color='black'
                            />
                          }
                        placeholder='Name'
                        errorStyle={{ color: 'red' }}
                        keyboardType='email-address'
                        value={name}
                    />
                    <Button
                        title="Continue"
                        titleStyle={{ color: '#fff', fontWeight: "700" }}
                        onPress={() => navigation.navigate('Inferface1')}
                        buttonStyle={{
                            backgroundColor: 'rgba(90, 154, 230, 1)',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            borderRadius: 30,
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>

    );
}

const styles = ScaledSheet.create({
    container: {
        marginHorizontal: "5@s",
        
    },
    WelcomePage: {
        backgroundColor: '#C1F4F4',
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontSize: "28@ms",
        marginBottom: "10@vs",
        color:"#000000"
    },
    content: {
        fontSize: "16@ms",
        marginBottom: "10@vs",
        color:"#000000"
    },
    input: {
        borderTopColor: "#000000",
        marginBottom: "8@vs",
        fontWeight: "400",
    },
    separator: {
        marginVertical: "2@vs",
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

}
);

export default Welcome