import * as React from 'react';
import Switch from '@mui/material/Switch';
import {useTheme} from "../../store/theme.ts";
const ThemeSwitcher = () => {
        const {theme, changeTheme} = useTheme();
        const [checked, setChecked] = React.useState(true);

                const mainPage = document.getElementsByClassName('cssMainPage')[0];
    console.log(mainPage, 'kzkzkz');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setChecked(event.target.checked);
        changeTheme()
        localStorage.setItem('theme', theme);
        console.log(theme);
    };

    return (
        <div>
            <Switch
                checked={theme==='dark'}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>
    );
};

export default ThemeSwitcher;