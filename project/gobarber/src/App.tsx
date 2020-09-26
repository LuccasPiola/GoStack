import 'react-native-gesture-handler'

import React from 'react'
import { StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AuthRoutes from './routes'
// import * as S from './styles'

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ backgroundColor: '#312e38', flex: 1 }}>
      <AuthRoutes />
    </View>
  </NavigationContainer>
)

export default App
