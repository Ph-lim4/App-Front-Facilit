import styled from 'styled-components/native';
import { primary_color, white } from '../../../components/colors'
import { h, w } from '../../dimens';

export const BtnGreen = styled.TouchableOpacity`
  background-color : ${primary_color};
  align-items : center;
  justify-content : center;
  width : ${w(184)}px;
  height : ${h(35)}px;
  border-radius : ${h(3)}px;
`;
export const BtnOutline = styled.TouchableOpacity`
  border-color: ${white};
  border-width: ${h(1)}px;
  align-items : center;
  justify-content : center;
  width : ${w(184)}px;
  height : ${h(35)}px;
  border-radius : ${h(3)}px;
`;