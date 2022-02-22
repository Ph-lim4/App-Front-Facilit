import AsyncStorage from '@react-native-async-storage/async-storage';

let token;

export const getHeader = (config) => {
    if (!config) {
        config = {};
    }
    Object.assign(config, { Authorization: `Bearer ${token}`});
    return { headers: config };
};
export const onSignOut = async () => {
    try {
        await AsyncStorage.removeItem('TOKEN_KEY')
    } catch (e) {
        console.log(e);
    }
}
export const onSignIn = async (response) => {
    try {
        token = response.token;
        await AsyncStorage.setItem('TOKEN_KEY', token);
    } catch (e) {
        console.log('Erro: ' + e);
    }
}
export const isSignedIn = async () => {
    try {
        token = await AsyncStorage.getItem('TOKEN_KEY')
        return (token !== null) ? true : false;
    } catch (e) {
        console.log(e);
    }
};