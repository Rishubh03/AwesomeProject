import { View, Text, StyleSheet, Pressable, Alert, Image, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';
import Header from '../../components/Header';
import { ImageSlider } from 'react-native-image-slider-banner';
import { Card } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height;

const Interface1 = ({ navigation }) => {
    
    const Separator = () => (
        <View style={styles.separator} />
    );
    return (
        
        <SafeAreaView style={styles.container}>
            <Header />

            <ScrollView >
                
                    <View style={styles.NewsBox}>
                    <Card style={styles.cardbox}> 
                    <ImageSlider 
                        data={[ 
                            { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' }, 
                            { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' }, 
                            { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' } 
                        ]} 
                        autoPlay={true} 
                        previewImageContainerStyle={{}} 
                        onItemChanged={(item) => console.log("item", item)} 
                    /> 
                </Card>
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

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CECECE',
    },
    NewsBox: {
        width: '100%',
        height: '200@vs',
        alignItems: 'center',
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
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 2,
        marginVertical: "5@vs",
        padding: 5,

    },
    text: {
        fontSize: "18@ms"
    },
    cardbox: { 
        position: 'absolute',
        justifyContent: "center", 
        backgroundColor: '#CECECE',
    }

})

export default Interface1