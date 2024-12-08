"use client"
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'


const ChangeTheme: React.FC = () => {
    const [theme, setTheme] = useState(false)
    theme == true ? document.body.className = 'dark' : document.body.className = ''
    return (
        <Button className='rounded bg-slate-950 text-slate-100 dark:bg-slate-300 dark:text-slate-950 rounded-3xl' onClick={() => setTheme(!theme)}>{theme == true ? 'light mode' : 'dark mode'}</Button>
    )
}
export default ChangeTheme