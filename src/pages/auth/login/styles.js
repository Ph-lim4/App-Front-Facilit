import styled from 'styled-components/native';
import { secondary_color, white } from '../../../components/colors'
import { h, w } from '../../../components/dimens';

export const Container = styled.SafeAreaView`
    background-color : ${secondary_color};
    flex : 1;
    align-items: center;
    justify-content: center;
`;

export const CircleView = styled.View`
    height: ${h(78)}px;
    width: ${h(78)}px;
    border-radius: ${h(39)}px;
    border-color: ${white};
    border-width: ${h(1.5)}px;
    align-items: center;
    justify-content: center;
`;

export const ViewBotton = styled.View`
    position: absolute;
    bottom: ${h(20)}px;
    flex-direction: row;
`;

export const ViewTextEnd = styled.View`
    width : ${w(184)}px;
    align-items: flex-end;
    margin-top: ${h(4)}px;
`;