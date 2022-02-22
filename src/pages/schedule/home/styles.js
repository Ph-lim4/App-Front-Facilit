import styled from 'styled-components/native';
import { dark_gray, light_gray, primary_color, secondary_color, third_color, white } from '../../../components/colors'
import { h, w } from '../../../components/dimens';

export const Container = styled.View`
`;

export const ImageBackground = styled.Image`
    width: 100%;
    height: ${h(300)}px;
`;

export const ViewTranslucent = styled.View`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${secondary_color}cc;
`;

export const ViewBorder = styled.View`
    position: absolute;
    top: ${h(200)}px;
    width: 100%;
    border-radius: ${w(35)}px;
    background-color: ${light_gray};
    align-items: center;
`;

export const ViewRowSpaceAround = styled.View`
    height: ${h(54)}px;
    width: 100%;
    padding-right: ${w(20)}px;
    padding-left: ${w(20)}px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const Line = styled.View`
    width: ${w(321)}px;
    height: ${h(1)}px;
    align-self: center;
    background-color: ${dark_gray};
`;

export const ContainerShop = styled.View`
    height: ${h(58)}px;
    width: ${w(286)}px;
    background-color: ${white};
    border-radius: ${w(9)}px;
    margin-top: ${h(15)}px;
    padding-left: ${w(17)}px;
    padding-right: ${w(35)}px;
`;

export const ViewRowSpaceBetween = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const ImageShop = styled.Image`
    height: ${h(46)}px;
    width: ${h(46)}px;
    border-radius: ${h(23)}px;;
`;