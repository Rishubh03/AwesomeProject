import { View, Text, StyleSheet, Pressable, Alert, Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';

const Interface1 = ({ navigation }) => {
    const Separator = () => (
        <View style={styles.separator} />
    );
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={{ marginHorizontal: 5, }}>


                    <View style={styles.NewsBox}>
                        <Text style={styles.Practice}>NEWS Feeds</Text>
                    </View>


                    <View style={styles.ParentBox}>

                        <View style={styles.inner}>
                            <Image source={require('../../../assets/Images/GardenDepartment.png')} />
                            <Text style={styles.text} onPress={() => navigation.navigate('GardenDepartment')} >The Garden Department</Text>
                        </View>

                        <View style={styles.inner}>
                            <Image source={require('../../../assets/Images/NearestGarden.png')} />
                            <Text style={styles.text} onPress={() => navigation.navigate('NearestGarden')} >Nearest Garden</Text>
                        </View>

                        <View style={styles.inner}>
                            <Image source={require('../../../assets/Images/RegisterComplaints.png')} />
                            <Text style={styles.text} onPress={() => navigation.navigate('RegisterComplaints')} >Register Complaint</Text>
                        </View>

                        <View style={styles.inner}>
                            <Image source={require('../../../assets/Images/AboutGarden.png')} />
                            <Text onPress={() => Alert.alert("hii")} style={styles.text}>About Garden</Text>
                        </View>

                        <View style={styles.inner}>
                            <Image source={require('../../../assets/Images/CommunityForums.png')} />
                            <Text onPress={() => Alert.alert("hii")} style={styles.text}>Community Forums</Text>
                        </View>

                        <View style={styles.inner}>
                            <Image source={require('../../../assets/Images/Feedback.png')} />
                            <Text onPress={() => Alert.alert("hii")} style={styles.text}>Feedback/Suggesion</Text>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    NewsBox: {
        width: '100%',
        height: '200@vs',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: "center",
        marginBottom: "10@vs",
    },
    Practice: {
        fontSize: 20,
    },
    ParentBox: {
        height: "525@vs",
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 0,
        flexWrap: 'wrap',
    },
    inner: {
        height: '150@vs',
        width: '40%',
        justifyContent: 'center',
        backgroundColor: '#C1F4F4',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 2,
        marginVertical: "5@vs",
        padding: 5,

    },
    text: {
        fontSize: "18@ms"
    }

})

export default Interface1