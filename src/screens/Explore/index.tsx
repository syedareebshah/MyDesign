import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { useStyles } from './styles'
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import BookCard from '../../components/BookCard';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from '../../navigation/MainBottomTabParams'
import SearchBar from '../../components/SearchBar';
type ExploreScreenProp = BottomTabNavigationProp<MainBottomTabParamList, 'Explore'>;

const Explore = () => {
    const styles = useStyles()

    const navigation = useNavigation<ExploreScreenProp>();

    return (
        <ScrollView>
            <View style={styles.container}>
                <SearchBar />
            <View style={styles.header}>
            <Text style={styles.heading}>Hi Jorge</Text>
            <Text style={styles.regularText}>Let's find something new...</Text>
            </View>
            <View style={styles.seprator}>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.boldText}>Trending</Text>
            </View>
            <BookCard />
            <View style={styles.seprator}>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.boldText}>New releases</Text>
            </View>
            <BookCard />
            <View style={styles.seprator}>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.boldText}>Selected for you</Text>
            </View>
            <BookCard />  
            </View>          
        </ScrollView>
    );
};



export default Explore;
