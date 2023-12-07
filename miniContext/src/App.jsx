import { useEffect, useState } from 'react'
import useTheme, { ThemeProvider } from './Contexts/Theme'

import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';
// import UserContextProvider from './Context/UserContextProvider'
// import Profile from './Components/Profile'
// import Login from './Components/Login'
function App() {
  const[themeMode,setThemeMode]=useState("light");
  //same function name will mutate the method given in ThemeProvider 

  const lightTheme=()=>{
    setThemeMode("light");
    console.log(themeMode);
  }
  const darkTheme=()=>{
    setThemeMode("dark");
    console.log(themeMode)
  }

  //actual change in theme
  useEffect(()=>{

    document.querySelector('html').classList.remove("light","dark");
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])



  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>


<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-1/2 max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
