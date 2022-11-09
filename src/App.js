import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import PageUsers from './pages/PageUsers'
import PageLogin from './pages/PageLogin'
import NotFound from './pages/NotFound'

export function App() {
    const [isConnect,setIsConnect] = useState(false)

    function logIn() {
        setIsConnect(true)
    }

    function logOut() {
        setIsConnect(false)
    }

    return (
        <BrowserRouter>
            <Navbar>
                <Routes>
                    <Route path='/users' element={isConnect ? <PageUsers logOut={logOut} /> : <PageLogin logIn={logIn}/>} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Navbar>
        </BrowserRouter>
    )
}