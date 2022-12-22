import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { urlApi } from "./settings"
import Navbar from './components/Navbar'
import PageUsers from './pages/PageUsers'
import PageHome from './pages/PageHome'
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

    useEffect(() => {
        fetch(urlApi + '?isLog=1')
            .then((response) => {
                if (response.status === 200) {
                    setIsConnect(true)
                }
            })
            .catch((e) => {
                console.log(e.message)
            })
    }, [])

    function sendLogOut() {
        fetch(urlApi + '?logOut=1')
            .then((response) => {
                if (response.status === 200) {
                    setIsConnect(false);
                }
            })
            .catch((e) => {
                console.log(e.message)
            })
    }

    return (
        <BrowserRouter>
            <Navbar sendLogOut={sendLogOut}>
                <Routes>
                    <Route path='/admin' element={isConnect ? <PageHome logOut={logOut} /> : <PageLogin logIn={logIn}/>} />
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