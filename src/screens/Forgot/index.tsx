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
import Icon from 'react-native-vector-icons/AntDesign'
import BookCard from '../../components/BookCard';


const Forgot = () => {
    const styles = useStyles()
    return (
        <View>
            <View style={styles.header}>

            </View>
            <View style={styles.login}>
                <Text style={styles.loginHeading}>Forgot Password</Text>
                <TextInput style={styles.txtInput} placeholder='enter your email' />
                <TouchableOpacity>
                    <Text style={styles.loginBtn}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};



export default Forgot;
