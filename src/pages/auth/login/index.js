import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, ToastAndroid } from 'react-native';
import { CircleView, Container, ViewTextEnd, ViewBotton } from './styles';
import { CustomText } from '../../../components/ui/texts';
import { mid_gray, primary_color, white } from '../../../components/colors'
import { Feather } from '@expo/vector-icons'
import { h } from '../../../components/dimens';
import { BtnGreen } from '../../../components/ui/buttons';
import { Input } from '../../../components/ui/inputs'
import api from '../../../controllers/api'
import { onSignIn } from '../../../controllers/auth';

const login = (props) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const sendData = async () => {
        if ((email) && (password)) {
            await api.post('auth/login/', { "email": "email@email.com", "password": "123qwe" }).then(response => {
                onSignIn(response.data)
                props.navigation.navigate('Navigation')
            }
            ).catch(err =>
                console.log(err.response.data)
            );
        }

    }

    return (
        <Container >
            <StatusBar style="light" />
            <CircleView>
                <Feather name="lock" size={h(36)} style={{ color: primary_color() }} />
            </CircleView>
            <CustomText fontSize={16} weight={"SemiBold"} color={white} style={{ marginTop: h(15) }}>FAZER LOGIN</CustomText>
            <Input marginTop={16}
                text={'USUÁRIO'}
                icon={'user'}
                type={'email-address'}
                capitalize
                onChangeText={email => setEmail(email)} />
            <Input marginTop={13} text={'SENHA'} password icon={'lock'} onChangeText={password => setPassword(password)} />
            <BtnGreen
                onPress={() => sendData()}
                style={{ marginTop: h(13) }}>
                <CustomText fontSize={16} weight={"SemiBold"} color={white}>ENTRAR</CustomText>
            </BtnGreen>
            <ViewTextEnd>
                <CustomText color={mid_gray} fontSize={10}>Esqueci minha senha</CustomText>
            </ViewTextEnd>
            <ViewBotton>
                <CustomText color={primary_color} fontSize={10}>Ainda não tem sua conta? </CustomText>
                <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                    <CustomText color={primary_color} fontSize={10} weight={"Bold"}>Cadastre-se</CustomText>
                </TouchableOpacity>
            </ViewBotton>
        </Container>
    );
}

export default login;