import React, { useState } from 'react';
import { View } from 'react-native';
import { TextGray, TextWhite, TextDarkGray, CustomText } from '../../../components/ui/texts'
import { light_gray, gray, mid_gray, dark_gray, secondary_color } from '../../../components/colors'
import { h, w } from '../../../components/dimens'
import { Rating } from 'react-native-ratings';
import { EvilIcons } from '@expo/vector-icons'
import { Container, Banner, Image, LineGray, ViewBorder, ViewFloating, ViewData, ViewRow } from './styles';
import Header from '../../../components/ui/custom_spinner/header'
import Body from '../../../components/ui/custom_spinner/body';

const type = () => {

  const [service, setService] = useState(false);

  return <Container>
    <Banner>
      <CustomText fontSize={19} weight={"SemiBold"} style={{letterSpacing: 1.23}} bold>Willian Santos</CustomText>
    </Banner>
    <ViewBorder>
      <ViewFloating>
        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Le8DdnZvCoSWoef12VEHKBraRyz7K8lQwg&usqp=CAU" }} />
        <ViewData>
          <ViewRow>
            <EvilIcons name="location" size={h(10)} color={mid_gray()} />
            <CustomText color={mid_gray} fontSize={10}>Av. Elevador lacerda, Farol - 08</CustomText>
          </ViewRow>
          <ViewRow>
            <EvilIcons name="clock" size={h(10)} color={mid_gray()} />
            <CustomText fontSize={10} color={mid_gray}>08:00 - 12:00pm</CustomText>
          </ViewRow>
          <ViewRow>
            <Rating
              type={'custom'}
              tintColor={light_gray()}
              imageSize={w(10)}
              startingValue={3.5}
              ratingBackgroundColor={gray()}
              ratingColor={"#EFC11D"}
              readonly={true}
              style={{ width: w(56) }} />
          </ViewRow>
        </ViewData>
      </ViewFloating>
      <LineGray />
      <CustomText color={secondary_color} fontSize={12} weight={"SemiBold"} style={{ marginTop: h(14), marginLeft: w(44) }} bold>Nossos serviços</CustomText>
      <Header title={"Cortes de Cabelos"} onPress={() => {service? setService(false) : setService(true)}} chevron={service}/>
      {service &&
        <View>
          <Body text={"Degradê"} price={13.00}/>
          <Body text={"Social"} price={12.00}/>
          <Body text={"Teste"} price={12.00}/>
          <Body text={"Agora"} price={10.00}/>
        </View>
      }
      <LineGray style={{marginTop: 30}}/>
      <CustomText color={secondary_color} fontSize={12} weight={"SemiBold"} style={{ marginTop: h(14), marginLeft: w(44) }} bold>Galeria</CustomText>
    </ViewBorder>
  </Container>;
}

export default type;