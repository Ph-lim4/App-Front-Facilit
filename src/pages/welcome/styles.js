import styled from 'styled-components/native';
import { secondary_color} from '../../components/colors'
import { h, w } from '../../components/dimens'

export const ContainerImage = styled.ImageBackground`
    flex: 1;
    align-items: center;
`;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
    background-color: ${secondary_color}cc;
`;

export const ContainerText = styled.View`
    margin-top: ${ h(89) }px;
    left: ${ w(32) }px;
    width: 100%;
`;

export const ContainerButtons = styled.View`
    bottom: ${h(92)}px;
    position: absolute;
`;

export const ViewRow = styled.View`
    flex-direction: row;
`;