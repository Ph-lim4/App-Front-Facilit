import React from 'react';
import { BtnGreen } from '../buttons';
import { CustomText, TextWhite } from '../texts';
import { h, w } from '../../dimens';
import { Body_Container } from './styles';
import { secondary_color } from '../../colors';

const body = (props) => {
  return <Body_Container  style={{elevation: 1}}>
        <CustomText weight={"SemiBold"} fontSize={10} color={secondary_color} >
            {props.text}
        </CustomText>
        <BtnGreen style={{width: w(50), height: h(13), right: w(10), position: "absolute", borderRadius: h(26)}}>
            <CustomText fontSize={6} weight={"SemiBold"}>RESERVAR</CustomText>
        </BtnGreen>
      </Body_Container>;
}

export default body;