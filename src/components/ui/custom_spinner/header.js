import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { CustomText, TextDarkGray } from '../texts';
import { Header_Container } from './styles';
import { Feather } from '@expo/vector-icons'; 
import { w, h } from '../../dimens';
import { secondary_color } from '../../colors';

const header = (props) => {
  return (
  <TouchableNativeFeedback onPress={props.onPress}>
    <Header_Container>
        <CustomText weight={"Medium"} fontSize={10} color={secondary_color} >
            {props.title}
        </CustomText>
        <Feather name={`chevron-${ props.chevron? "down" : "up"}`} size={h(10)} color={secondary_color()} style={{right: w(14), position: 'absolute'}}/>
      </Header_Container>
    </TouchableNativeFeedback>);
}

export default header;