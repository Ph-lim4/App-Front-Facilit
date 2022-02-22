import styled from 'styled-components/native';
import { gray, light_gray, mid_gray } from '../../colors';
import { w, h } from '../../dimens';

export const Header_Container = styled.View`
  width: ${w(286)}px;
  height: ${h(26)}px;
  background-color: ${gray};
  align-self: center;
  border-radius: ${w(4)}px;
  margin-top: ${h(6)}px;
  padding-left: ${w(7)}px;
  align-items: center;
  flex-direction: row;
`;

export const Body_Container = styled.View`
  width: ${w(286)}px;
  height: ${h(26)}px;
  align-self: center;
  border-radius: ${w(4)}px;
  margin-top: ${h(6)}px;
  padding-left: ${w(7)}px;
  align-items: center;
  flex-direction: row;
  background-color: ${light_gray};
`;
