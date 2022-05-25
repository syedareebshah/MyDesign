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
        book:{
            width:wp('40%'),
            height:hp('30%'),
            resizeMode:'contain',
            alignSelf:'center',
            borderRadius:5
        },
        heading:{
            marginTop:20,
            textAlign:'center',
            fontSize:wp('7%'),
            fontWeight:'bold',
            color:'black'
        },
        subHeading:{
            textAlign:'center',
            fontSize:wp('5%'),
        },
        horizontalLine:{
            height:1,
            backgroundColor:'black',
            marginTop:20,
            marginBottom:20,
            
        },
        loweDiv:{
            marginLeft:30,
            marginRight:30
        },
        rowDiv:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            flex:1,
            paddingBottom:30
        },
        genero:{
            flex:0.5
        },
        launch:{
            flex:0.25
        },
        size:{
            flex:0.25
        },
        boldText:{
            color:'black',
            fontWeight:'bold'
        }
        
        
    })
    return styles;
}