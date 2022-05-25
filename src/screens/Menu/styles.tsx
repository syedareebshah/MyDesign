import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import { getPercentageWidth, getPercentageHeight } from 'utils/dimentionUtil';

export const useStyles = () => {
    const styles = StyleSheet.create({
        container:{
            paddingTop:30,
            paddingBottom:60,
            paddingLeft:30,
            paddingRight:30,
            
        },
        header:{
            fontSize:30,
            color:'black',
            fontWeight:'bold',
            marginBottom:20
        },
        horizontalLine:{
            height:1,
            backgroundColor:'gray',
            marginTop:15,
            marginBottom:15,
        },
        listItems:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        }
        
        
    })
    return styles;
}