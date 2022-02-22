import styled from 'styled-components/native';
import { light_gray, secondary_color, faded_green, gray, mid_gray } from '../../../components/colors'
import { h, w } from '../../../components/dimens'

export const LineGray = styled.View`
    width: ${w(320)}px;
    height: ${h(1)}px;
    background-color: ${gray};
    margin-top: ${h(7)}px;
    align-self: center;
`;
export const ViewBorder = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${light_gray};
    border-radius: ${w(35)}px;
    top: -${h(30)}px;
`;
export const ViewFloating = styled.View`
    flex-direction: row;
    top: -${h(25)}px;
`;
export const ViewData = styled.View`
    margin-top: ${h(30)}px;
    margin-left: ${w(12)}px;
    height: ${h(50)}px;
    justify-content: space-between;
`;
//duas ultimas linhas Gil
export const ViewTypes = styled.View`
    margin-left: ${w(90)}px;
    margin-right: ${w(90)}px;
`;
//Texto Add
export const Add = styled.View`
    width: ${w(120)}px;
    height: ${h(50)}px;
    align-items: center;
    background-color: ${faded_green};
    border-radius: ${h(7)}px;
    position: absolute;
    right: 0;
`;
export const ViewType = styled.View`
    margin-top: ${h(37)}px;
    align-items: center;
    flex-direction: row; 
`;
export const ViewRow = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Container = styled.ScrollView`
  flex: 1;
`;
export const Banner = styled.View`
  width: 100%;
  height: ${h(200)}px;
  background-color: ${secondary_color()};
  align-items: center;
  justify-content: center;
`;
export const Image = styled.Image`
  width: ${h(84)}px;
  height: ${h(84)}px;
  border-radius: ${h(42)}px;
  margin-left: ${w(30)}px;
`;
