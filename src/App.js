import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import PageUsers from './pages/PageUsers'
import PageLogin from './pages/PageLogin'
import NotFound from './pages/NotFound'
// Pages spécifique à ploum studio
import PageProjects from './pages/PageProjects'
import PageTags from './pages/PageTags'

export function App() {
    const [isConnect,setIsConnect] = useState(true)

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
                    <Route path='/projects' element={isConnect ? <PageProjects logOut={logOut} /> : <PageProjects logIn={logIn}/>} />
                    <Route path='/tags' element={isConnect ? <PageTags logOut={logOut} /> : <PageTags logIn={logIn}/>} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Navbar>
        </BrowserRouter>
    )
}