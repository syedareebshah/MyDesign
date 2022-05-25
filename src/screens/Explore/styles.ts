import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import { getPercentageWidth, getPercentageHeight } from 'utils/dimentionUtil';

export const useStyles = () => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#FFFFFF',
            paddingBottom:60,
            paddingTop:50

        },
        heading:{
            fontWeight:'bold',
            fontSize:30,
            color:'black'
        },
        horizontalLine:{
            height:1,
            backgroundColor:'gray',
            marginTop:40,
            marginBottom:15,
        },
        header:{
            marginLeft:30,
            marginRight:30,

        },
        regularText:{
            color:'black',
        },
        boldText:{
            color:'black',
            fontWeight:'bold'
        },
        seprator:{
            marginLeft:30,
            marginRight:30,
            marginBottom:5,
            
        }
        
        
    })
    return styles;
}