import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import welcome from './welcome/index'
import login from './auth/login/index'
import register from './auth/register/index'
import navigation from './navigation'
import service from './schedule/service'

const Stack = createStackNavigator();

const routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Teste" component={login} options={{ headerShown: false }} />
                <Stack.Screen name="Welcome" component={welcome} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={register} options={{ headerShown: false }} />
                <Stack.Screen name="Navigation" component={navigation} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default routes;