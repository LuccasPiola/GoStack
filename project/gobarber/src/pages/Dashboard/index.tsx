import React from 'react'
import { Button, View } from 'react-native'
import { useAuthContext } from '../../context/AuthContext'

const Dashboard: React.FC = () => {
  const { signOut } = useAuthContext()

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="sair" onPress={signOut} />
    </View>
  )
}

export default Dashboard
