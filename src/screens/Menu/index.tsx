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


const Menu = () => {
    const styles = useStyles()
    return (
       <ScrollView style={{backgroundColor:'white',}}>
           <View style={styles.container}>
               <Text style={styles.header}>Preference</Text>
               <View style={styles.horizontalLine}></View>
               <View style={styles.listItems}>
                   <Text>ACCOUNT</Text>
                   <Icon name='right' />
               </View>
               <View style={styles.horizontalLine}></View>
               <View style={styles.listItems}>
                   <Text>SETTING</Text>
                   <Icon name='right' />
               </View>
               <View style={styles.horizontalLine}></View>
               <View style={styles.listItems}>
                   <Text>GENRES PREFERENCE</Text>
                   <Icon name='right' />
               </View>
               <View style={styles.horizontalLine}></View>
               <View style={styles.listItems}>
                   <Text>LOGOUT</Text>
               </View>

           </View>
       </ScrollView>
            
    );
};



export default Menu;
