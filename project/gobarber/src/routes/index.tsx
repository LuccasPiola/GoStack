import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../pages/SignIn'
import SingUp from '../pages/SignOut'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SingUp} />
  </Auth.Navigator>
)

export default AuthRoutes
