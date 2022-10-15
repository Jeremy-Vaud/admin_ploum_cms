import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageUsers from './pages/PageUsers'

export function App() {
    return (
        <BrowserRouter>
            <Navbar>
                <Routes>
                    <Route path='/users' element={<PageUsers />} />
                </Routes>
            </Navbar>
        </BrowserRouter>
    )
}