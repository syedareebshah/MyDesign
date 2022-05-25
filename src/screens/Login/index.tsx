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


const Login = () => {
    const styles = useStyles()
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.desc}>Book app aims to provide variety with a quick sharing of resources among friends and family</Text>
            </View>
            <View style={styles.login}>
                <Image style={styles.logo} source={require('../../assets/logo.jpeg')} />
                <Text style={styles.loginHeading}>Log In Now</Text>
                <Text style={styles.subHeading}>Please login to continue using our app</Text>
                <TextInput style={styles.txtInput} placeholder='enter your email address' />
                <TextInput style={styles.txtInput} placeholder='enter your password' />
                <TouchableOpacity> 
                    <Text style={styles.loginBtn}>
                        LOG IN
                    </Text>
                </TouchableOpacity>
                <Text style={styles.subHeading}>Don't have an account?</Text>
                <TouchableOpacity>
                <Text style={styles.sinup}>Sinup</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};



export default Login;
