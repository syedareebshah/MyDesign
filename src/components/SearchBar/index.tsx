import React from 'react';
import { useStyles } from './styles'
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchBar = () => {
    const styles = useStyles()
    return (
        <View style={styles.searchView}>
            <TextInput
                placeholder='Search Here'
                style={styles.searchViewInput}
            />
            <TouchableOpacity >
                <Icon name="search" size={20} style={styles.searchViewChildren} />
            </TouchableOpacity>
        </View>


    );
};

const styles = StyleSheet.create({

});

export default SearchBar;
