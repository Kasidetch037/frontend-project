import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface IGuardedRouteProps {
  //route นี้เข้าถึงได้มั้ย ?
  isRouteAccessible: boolean
  //ถ้าเข้าถึงไม่ได้ อยากให้ redirect ไปไหน
  redirectRoute: string
}

const GuardedRoute = ({ isRouteAccessible, redirectRoute }: IGuardedRouteProps) => {
  return (
    //เข้าถึงได้มั้ย ถ้าได้ ให้วิ่งไปที่ outlet ถ้าไม่ได้ redirect ไปหน้าอื่น -> replace จะทำให้ไม่เจอ /create /etc ที่ไม่ให้เข้า
    isRouteAccessible ? <Outlet /> : <Navigate to={redirectRoute} replace />
  )
}

export default GuardedRoute
