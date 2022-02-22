import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Container, CircleView, ViewTextEnd, ViewBotton, ContainerInternal } from './styles';
import { TextRed, CustomText } from '../../../components/ui/texts';
import { primary_color, white, mid_gray } from '../../../components/colors'
import { Feather } from '@expo/vector-icons'
import { h } from '../../../components/dimens';
import { BtnGreen } from '../../../components/ui/buttons';
import { Input } from '../../../components/ui/inputs'
import api from '../../../controllers/api';

const Register = (props) => {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirm, setConfirm] = useState(null)

    const [textError, setTextError] = useState(null);

    const sendData = () => {
        if (name && email && phone && password && confirm) {
            if (password == confirm) {
                //aqui está sem funcionar ainda por causa da api
                api.post('usuarios/cadastrar', {
                    name: name,
                    email: email,
                    celfone: phone,
                    password: password
                }).then(console.log()).catch(err => {
                    const response = JSON.parse(err.request.response);
                    console.log(response);
                    if (response.name) {
                        setTextError("O NOME PRECISA TER ENTRE 5 E 40 CARACTERES")
                    } else if (response.email) {
                        setTextError("POR FAVOR INFORME UM EMAIL VÁLIDO")
                    } else {
                        console.log(response);
                    }
                })
            } else {
                setTextError("SENHAS DIFERENTES")
            }
        } else {
            setTextError("PEENCHA TODOS OS CAMPOS")
        }
    }

    //props.navigation.replace('Navigation')

    return (
        <Container >
            <StatusBar style="light" />
            <KeyboardAvoidingView style={{ paddingBottom: h(100) }}>
                <ContainerInternal>
                    <CircleView>
                        <Feather name="lock" size={h(36)} style={{ color: primary_color() }} />
                    </CircleView>
                    <CustomText fontSize={16} weight={"SemiBold"} color={white} style={{ marginTop: h(25) }}>FAZER CADASTRO</CustomText>
                    <Input marginTop={16} text={'NOME'} onChangeText={name => setName(name)} />
                    <Input marginTop={13} text={'EMAIL'} onChangeText={email => setEmail(email)} />
                    <Input marginTop={13} text={'TELEFONE'} onChangeText={phone => setPhone(phone)} />
                    <Input marginTop={13} text={'SENHA'} password={true} onChangeText={password => setPassword(password)} />
                    <Input marginTop={13} text={'CONFIRMAR SENHA'} password={true} onChangeText={confirm => setConfirm(confirm)} />
                    {textError && <TextRed fontSize={13} style={{ textAlign: 'center', marginTop: h(13) }}>{textError}</TextRed>}
                    <BtnGreen
                        onPress={() => sendData()}
                        style={{ marginTop: h(13) }}>
                        <CustomText fontSize={16} weight={"SemiBold"} color={white}>CADASTRAR</CustomText>
                    </BtnGreen>
                    <ViewTextEnd>
                        <CustomText color={mid_gray} fontSize={10}>Concordo com os termos do app</CustomText>
                    </ViewTextEnd>
                </ContainerInternal>
            </KeyboardAvoidingView>
            <ViewBotton>
                <CustomText color={primary_color} fontSize={10}>Já possui uma conta? </CustomText>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                    <CustomText color={primary_color} fontSize={10} weight={"Bold"}>Faça seu login</CustomText>
                </TouchableOpacity>
            </ViewBotton>

        </Container>
    );
}

export default Register;