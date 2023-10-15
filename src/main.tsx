import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
{
  /* มอง <AuthProvider> เป็น component ทำให้ <App /> ที่ส่งเข้าไปใน <AuthProvider> กลายเป็น children props
    "App กลายเป็น children" ดังนั้น ใน AuthProvider.tsx ก็ต้องรับ props ด้วย(props ชื่อ children) */
}
