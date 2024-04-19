import { useState, useEffect } from 'react';

const ThemeToggle = () => {

    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        saveThemeToLocalStorage(!darkMode);
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme) {
            setDarkMode(storedTheme === 'dark')
        }
    }, [])

    const saveThemeToLocalStorage = (theme) => {
        localStorage.setItem('theme', theme ? 'dark' : 'light')
    }
    return (
		<div
			className='form-check form-switch h-25'
			style={{ lineHeight: '50px' }}>
			<input
				className='form-check-input p-3'
				style={{ width: '70px' }}
				onChange={toggleDarkMode}
				type='checkbox'
				role='switch'
                id='toggleTheme'
                checked={darkMode ? 'checked' : ''}
			/>
			<label
				className='form-check-label  mx-2'
				style={{ lineHeight: '50px' }}
				htmlFor='toggleTheme'>
				{' '}
				{darkMode ? ' Light Mode' : ' Dark Mode'}
			</label>
		</div>
	);
}

export default ThemeToggle