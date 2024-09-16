import React,{createContext, useEffect, useState} from 'react'
import './theme.css'

export const ThemeColor = createContext();

export const ThemeStorage=({children})=>{
    const [theme,setTheme]=useState(()=>{
        const initialTheme = localStorage.getItem('theme');
        return initialTheme ? initialTheme : 'light'
    });


    const getLocalStorageTheme=()=>{
        const savedTheme = localStorage.getItem('theme')
        if(savedTheme){
            setTheme(savedTheme)
        }
    }

    const toggleTheme=()=>{
        setTheme((prevTheme)=>{
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme
        })
    }

    useEffect(()=>{
        getLocalStorageTheme()
    },[theme])
    return (
        <ThemeColor.Provider value={{theme, toggleTheme}}>
           <section className={theme}>
             {children}
           </section>
        </ThemeColor.Provider>
    )
}
