import React from 'react';
import { useStyles } from './styles'
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';


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
