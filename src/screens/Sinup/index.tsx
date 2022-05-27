import React from 'react';
import { useStyles } from './styles'
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image
} from 'react-native';


const Sinup = () => {
    const styles = useStyles()
    return (
        <View>
            <View style={styles.header}>
            </View>
            <View style={styles.login}>
                <Text style={styles.loginHeading}>Sign Up</Text>
                <TextInput style={styles.txtInput} placeholder='enter your first name' />
                <TextInput style={styles.txtInput} placeholder='enter your last name' />
                <TextInput style={styles.txtInput} placeholder='enter your email' />
                <TextInput style={styles.txtInput} placeholder='enter your password' />
                <TouchableOpacity>
                    <Text style={styles.loginBtn}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};



export default Sinup;
