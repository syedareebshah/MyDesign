import React from 'react';
import { useStyles } from './styles'
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign'
import BookCard from '../../components/BookCard';
import { DrawerNavigationParams } from '../../navigation/DrawerNavigationParams';
import { useNavigation } from '@react-navigation/native';


type loginScreenProp = NativeStackNavigationProp<DrawerNavigationParams, 'Login'>;


const Login = () => {
    const styles = useStyles()
    const navigation = useNavigation<loginScreenProp>();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = (data: any) => {
        if(data.email =='admin@admin.com' && data.password == '1234'){
            navigation.navigate('DrawerNavigation')
        }
        else{
            Alert.alert("Email/Password Wrong")
        }
    };

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
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.txtInput}
                            keyboardType="email-address"
                            placeholder='enter your email address'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="email"
                />
                {errors.email && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.txtInput}
                            placeholder='enter your password'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="password"
                />
                {errors.password &&  <Text>This is required.</Text>}

                <TouchableOpacity onPress={() => { navigation.navigate('Forgot') }}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={handleSubmit(onSubmit)} style={styles.loginBtn}>
                        LOG IN
                    </Text>
                </TouchableOpacity>
                <Text style={styles.subHeading}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Sinup') }}>
                    <Text style={styles.sinup}>Sinup</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};



export default Login;
