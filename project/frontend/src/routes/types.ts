import { ComponentType } from 'react'
import { RouteProps as ReactRouteProps } from 'react-router-dom'

export interface ReactProps extends ReactRouteProps {
  isPrivate?: boolean
  component: ComponentType
}
