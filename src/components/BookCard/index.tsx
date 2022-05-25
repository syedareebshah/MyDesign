import React from 'react';
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
import { useStyles } from './styles';


const BookCard = () => {
    const styles = useStyles()
    return (

        <ScrollView horizontal={true}>
            <View style={styles.bookCard}>
                <Image style={styles.bookStyle} source={require('../../assets/bookCover.jpeg')} />
                <Text style={styles.bookName}>Becoming</Text>
                <Text>Michelle Obama</Text>
            </View>
            <View style={styles.bookCard}>
                <Image style={styles.bookStyle} source={require('../../assets/bookCover.jpeg')} />

                <Text style={styles.bookName}>Becoming</Text>
                <Text>Michelle Obama</Text>
            </View>
            <View style={styles.bookCard}>
                <Image style={styles.bookStyle} source={require('../../assets/bookCover.jpeg')} />
                <Text style={styles.bookName}>Becoming</Text>
                <Text>Michelle Obama</Text>
            </View>
        </ScrollView>



    );
};



export default BookCard;
