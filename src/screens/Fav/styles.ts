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
            paddingBottom:50,
            paddingTop:50,
        },
        heading:{
            fontWeight:'bold',
            fontSize:30,
            color:'black',
            marginBottom:30
        },
        
        header:{
            marginLeft:30,
            marginRight:30,
        },
        regularText:{
            color:'black',
            marginBottom:5
        },
        boldText:{
            color:'black',
            fontWeight:'bold'
        },
        books:{
            width:135,
            height:190,
            resizeMode:'contain',
            borderRadius:4,
            marginTop:15,
        },
        booksContainer:{
            marginLeft:30,
            marginRight:30
        },
        booksShop:{
            alignSelf:'center',
            display:'flex',
            flexDirection:'row',
            width:wp('100%'),
            flexWrap:'wrap',
            alignContent:'center',
            
        }
        
        
    })
    return styles;
}