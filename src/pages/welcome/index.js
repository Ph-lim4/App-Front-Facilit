import React from 'react';
import { CustomText } from '../../components/ui/texts';
import { Container, ContainerText, ContainerImage, ContainerButtons, ViewRow } from './styles';
import { h } from '../../components/dimens';
import { BtnGreen, BtnOutline } from '../../components/ui/buttons';
import { white } from '../../components/colors';

const welcome = (props) => {
  return (
    <ContainerImage source={require('../../assets/images/bg_welcome.jpg')}>
      <Container>
        <ContainerText>
          <CustomText weight={"SemiBold"} color={white} fontSize={36} >Olá, seja{"\n"}bem vindo{"\n"}ao nosso</CustomText>
          <CustomText weight={"Bold"} color={white} fontSize={36} style={{ top: -h(6), textDecorationLine: 'underline' }} >aplicativo.</CustomText>
          <CustomText color={white} fontSize={16} style={{ marginTop: h(32) }}>Com alguns cliques você</CustomText>
          <ViewRow>
            <CustomText color={white} fontSize={16}>já cria um </CustomText>
            <CustomText color={white} fontSize={16} weight={"SemiBold"} style={{ textDecorationLine: 'underline' }}>compromisso</CustomText>
          </ViewRow>
          <CustomText color={white} fontSize={16}>com o seu profissional. </CustomText>
        </ContainerText>
        <ContainerButtons>
          <BtnGreen onPress={() => { props.navigation.replace('Login') }}>
            <CustomText weight={"SemiBold"} color={white} fontSize={16}>ENTRAR</CustomText>
          </BtnGreen>
          <BtnOutline onPress={() => { props.navigation.replace('Register') }} style={{ marginTop: h(13) }}>
            <CustomText weight={"SemiBold"} color={white} fontSize={16}>CADASTRAR</CustomText>
          </BtnOutline>
        </ContainerButtons>
      </Container>
    </ContainerImage>
  );
}
export default welcome;