import { Routes, Route } from 'react-router-dom'
import { Layout } from '../pages/Layout/Layout'
import { LandingPage } from '../pages/LandingPage/LandingPage'
import { MainPage } from '../pages/MainPage/MainPage'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react"
import { AppContextProvider } from '../utils/AppContextProvider'

function App() {
    const location = useLocation()
    const [isFirstRender, setPlayAnimation] = useState(false)

    useEffect(() => {
        setPlayAnimation(true)
    }, [location.pathname])

    return (
        <AppContextProvider
            isFirstRender={isFirstRender}
        >
        {
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Layout />}>
                <Route index element={<LandingPage/>}/>
                <Route path='/make' element={<MainPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        </Routes>
        }
        </AppContextProvider>
    )
}

export default App
