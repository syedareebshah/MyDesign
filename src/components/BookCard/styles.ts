import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const useStyles = () => {
    
    const styles = StyleSheet.create({
        bookCard:{
            marginLeft:30,
            paddingBottom:10
        },
        bookName:{
            color:'black',
            marginBottom:5
        },
        bookStyle:{
            height:190,
            width:140,
            resizeMode:'contain',
            borderRadius:4
        }
        
        
    })
    return styles;
}