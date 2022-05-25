import React, { useState } from 'react';
import booksJson from '../../dummy.json'
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
    const [books, setBooks] = useState<any>(booksJson)

    const styles = useStyles()
    return (

        <ScrollView horizontal={true}>
            {books.map((obj: any, i: number) => {
                console.log(obj.img, "...");

                return (
                    <View key={i} style={styles.bookCard}>
                        <Image style={styles.bookStyle} source={{uri:`${obj.img}`}} />
                        <Text style={styles.bookName}>{obj.title}</Text>
                        <Text>{obj.author}</Text>
                    </View>
                )
            })}
        </ScrollView>



    );
};



export default BookCard;
