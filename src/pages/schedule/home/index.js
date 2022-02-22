import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, ScrollView, StatusBar, Platform } from 'react-native';
import { light_gray, secondary_color } from '../../../components/colors';
import { h, w } from '../../../components/dimens';
import { CustomText } from '../../../components/ui/texts';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Container, ContainerShop, ImageBackground, ImageShop, Line, ViewBorder, ViewRowSpace, ViewRowSpaceAround, ViewRowSpaceBetween, ViewTranslucent } from './styles';
import api from '../../../controllers/api';
import { getHeader } from '../../../controllers/auth';

const stopScrollView = ({ layoutMeasurement, contentOffset }, scroll, height) => {
    if (scroll == 0)
        return ((h(840) - height) - (layoutMeasurement.height + contentOffset.y)) / 3
    else if (scroll == 1) {
        return contentOffset.y > h(200)
    } else {
        return contentOffset.y
    }
};

const home = () => {
    const STATUSBAR_HEIGHT = Platform.OS === "ios" ? getStatusBarHeight() : StatusBar.currentHeight;
    const [borderRadius, setBorderRadius] = useState(35)
    const [position, setPosition] = useState(false)
    const [lastedPosition, setLastedPosition] = useState(0)
    const [response, setResponse] = useState(null)

    useEffect(() => {
        api.get('shop', getHeader())
            .then(response => setResponse(response.data))
            .catch(console.log)
    })

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: STATUSBAR_HEIGHT, backgroundColor: light_gray() }} />
            <ScrollView
                onScroll={({ nativeEvent }) => {
                    if (stopScrollView(nativeEvent, 1, STATUSBAR_HEIGHT)) {
                        if (stopScrollView(nativeEvent, 2, STATUSBAR_HEIGHT) < lastedPosition)
                            setPosition(true)
                        else
                            setPosition(false)
                    } else
                        setPosition(false)
                    setLastedPosition(stopScrollView(nativeEvent, 2, STATUSBAR_HEIGHT))
                    setBorderRadius(stopScrollView(nativeEvent, 0, STATUSBAR_HEIGHT))
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={400}>
                <Container
                    style={{ height: h(75 * 20) }}>
                    <ImageBackground resizeMode={'stretch'} source={{ uri: "https://cdn.leroymerlin.com.br/products/placa_decorativa_barber_shop_barbearia_1775plmk_1566860626_5f9f_600x600.jpg" }} />
                    <ViewTranslucent />
                    <ViewBorder style={{ borderRadius: borderRadius <= 35 ? h(borderRadius) : h(35) }}>
                        <View style={{ width: `100%` }}>
                            <ViewRowSpaceAround>
                                <CustomText fontSize={8} weight={"Medium"} color={secondary_color}>TODOS</CustomText>
                                <CustomText fontSize={8} weight={"Medium"} color={secondary_color}>POPULARES</CustomText>
                                <CustomText fontSize={8} weight={"Medium"} color={secondary_color}>MAIS AVALIADOS</CustomText>
                                <CustomText fontSize={8} weight={"Medium"} color={secondary_color}>NOVOS</CustomText>
                            </ViewRowSpaceAround>
                            <Line />
                        </View>
                        {response &&
                            response.map((item, index) => {
                                return (
                                    <ContainerShop
                                        key={item.id}>
                                        <ViewRowSpaceBetween>
                                            <View>
                                                <CustomText fontSize={12} weight={"SemiBold"} color={secondary_color}>{item.shopname}</CustomText>
                                                <CustomText fontSize={6} weight={"SemiBold"} color={secondary_color}>{item.tag}</CustomText>
                                                <CustomText fontSize={6} weight={"SemiBold"} color={secondary_color} style={{ marginTop: h(5) }}>5.0</CustomText>
                                            </View>
                                            <View>
                                                <ImageShop source={{ uri: "https://image.shutterstock.com/image-vector/barbershop-logo-design-vintage-lettering-260nw-1089739679.jpg" }} />
                                            </View>
                                        </ViewRowSpaceBetween>
                                        <Feather name={"bookmark"} size={h(12)} color={secondary_color()} style={{ position: "absolute", right: w(12), top: h(6) }} />
                                    </ContainerShop>
                                )
                            })}
                    </ViewBorder>
                </Container>
            </ScrollView>
            {position &&
                <View style={{ position: `absolute`, top: STATUSBAR_HEIGHT, backgroundColor: light_gray(), width: `100%` }}>
                    <ViewRowSpaceAround>
                        <CustomText fontSize={8} weight={"Medium"} color={secondary_color}>TODOS</CustomText>
                        <CustomText fontSize={8} weight={"Medium"} color={secondary_color}>POPULARES</CustomText>
                        <CustomText fontSize={8} weight={"Medium"} color={secondary_color}>MAIS AVALIADOS</CustomText>
                        <CustomText fontSize={8} weight={"Medium"} color={secondary_color}>NOVOS</CustomText>
                    </ViewRowSpaceAround>
                </View>
            }
        </View>
    );
}

export default home;
