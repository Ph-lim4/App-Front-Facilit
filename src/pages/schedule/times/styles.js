import styled from 'styled-components/native';
import { light_gray } from '../../../components/colors';
import { h, w } from '../../../components/dimens';

export const Container = styled.View`
  background-color: ${light_gray};
  flex: 1;
  padding-top: ${h(120)}px;
  align-items: center;
`;

export const CalendarView = styled.View`
  width: ${w(880)}px;
`;
