import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import { getPercentageWidth, getPercentageHeight } from 'utils/dimentionUtil';

export const useStyles = () => {
    const styles = StyleSheet.create({
        
        searchViewChildren: {
            margin: 2,
            marginLeft: 5,
        },
        searchViewShimmer: {
            marginBottom: 20,
            flexDirection: 'row',
            borderRadius: 30,
            justifyContent: 'space-between',
            alignItems: 'center',
            height: hp('5%'),
            backgroundColor: '#E7E5E7',
        },
        searchView: {
            marginTop: 5,
            marginBottom: 20,
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 50,
            alignSelf: 'center',
            width: '90%',
            borderColor: 'grey',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 5,
            backgroundColor:'#EDEDED'
        },
        searchViewInput: {
            margin: 2,
            marginLeft: 5,
            width: wp('75%'),
        },
        
        
    })
    return styles;
}