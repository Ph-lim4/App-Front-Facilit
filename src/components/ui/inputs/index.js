import styled from 'styled-components/native';
import React from 'react'
import { mid_gray, primary_color, white } from '../../colors'
import { Feather } from '@expo/vector-icons'
import { h, w } from '../../dimens';
import { TextInput } from 'react-native'

export const View = styled.View`
    flex-direction: row;
    border-color: ${primary_color};
    border-width: ${h(1)}px;
    align-items : center;
    justify-content : center;
    width : ${w(184)}px;
    height : ${h(35)}px;
    border-radius : ${h(3)}px;
    padding-left: ${w(8)}px;
`;

export const Input = (props) =>{
    return( 
    <View style={{marginTop: h(props.marginTop)}}>
        {props.icon && <Feather name={props.icon} size={h(12)} color={mid_gray()}/>}
        <TextInput
        placeholder={props.text}
        placeholderTextColor={mid_gray()}
        onChangeText={props.onChangeText}
        keyboardType={props.type ?  props.type : 'default'}
        autoCapitalize={props.capitalize ? 'none' : 'sentences'}
        secureTextEntry={props.password}
        style={{flex: 1, marginLeft: w(4), color: mid_gray()}} 
        />        
    </View>
    ); 

}
