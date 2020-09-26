import React from 'react'
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { ReactProps } from './types'
// import * as S from './styles'

const Route: React.FC<ReactProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuthContext()

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

export default Route
