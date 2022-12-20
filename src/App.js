import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import PageUsers from './pages/PageUsers'
import PageLogin from './pages/PageLogin'
import NotFound from './pages/NotFound'
// Pages spécifique à ploum studio
import PageProjects from './pages/PageProjects'
import PageTags from './pages/PageTags'
import PageAcceuil from './pages/PageAccueil'

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
                    <Route path='/admin/users' element={isConnect ? <PageUsers logOut={logOut} /> : <PageLogin logIn={logIn}/>} />
                    <Route path='/admin/projects' element={isConnect ? <PageProjects logOut={logOut} /> : <PageLogin logIn={logIn}/>} />
                    <Route path='/admin/tags' element={isConnect ? <PageTags logOut={logOut} /> : <PageLogin logIn={logIn}/>} />
                    <Route path='/admin/Accueil' element={isConnect ? <PageAcceuil logOut={logOut} /> : <PageLogin logIn={logIn}/>} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Navbar>
        </BrowserRouter>
    )
}