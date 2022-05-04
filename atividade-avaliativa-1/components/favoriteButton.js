import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function FavoriteButton({iconName}){
    return(
        <TouchableOpacity>
            <AntDesign 
                name={iconName}
                size={30} 
                color='yellow' 
                onPress={() => alert('clicou em mim')}/>
        </TouchableOpacity>
    );
}

// const style = StyleSheet.create({
//     container: {
//         alignItem: 'center',
//         justifyContent: 'center',
//         marginHorizontal: '20%',
//         borderRadius: 20,
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderWidth: 1,
//         backgroundColor: '#00dd99',
//         boderColor: 'green',
//     },
// });