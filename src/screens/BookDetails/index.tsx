import React from 'react';
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


const BookDetails = () => {
    const styles = useStyles()
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.book} source={require('../../assets/bookCover.jpeg')} />
                <Text style={styles.heading}>Becoming</Text>
                <Text style={styles.subHeading}>Author</Text>
                <View style={styles.loweDiv}>
                    <View style={styles.horizontalLine}></View>
                    <View style={styles.rowDiv}>
                        <View style={styles.genero}>
                            <Text style={{marginBottom:10}}>genero</Text>
                            <Text style={styles.boldText}>Biography</Text>
                            <Text style={styles.boldText}>Autobiography</Text>
                            <Text style={styles.boldText}>Memoirs</Text>
                        </View>
                        <View style={styles.launch}>
                            <Text style={{marginBottom:10}}>Launch</Text>
                            <Text style={styles.boldText}>2018</Text>
                            <Text style={styles.boldText}>November</Text>
                        </View>
                        <View style={styles.size}>
                            <Text style={{marginBottom:10}}>Size</Text>
                            <Text style={styles.boldText}>448</Text>
                            <Text style={styles.boldText}>Pages</Text>
                        </View>
                    </View>
                    <Text style={{marginBottom:20}}>Synopse</Text>
                    <Text style={{color:'black'}}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};



export default BookDetails;
