

import css from './Header.module.css'
import {useNavigate} from "react-router-dom";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NavigationBlock from "../NavigationBlock/NavigationBlock.tsx";
import SearchBlock from "../SearchBlock/SearchBlock.tsx";
import LoginBlock from "../LoginBlock/LoginBlock.tsx";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.tsx";
import TemporaryDrawer from "../Sidebar/Sidebar.tsx";
import {useTheme} from "../../store/theme.ts";

const Header = () => {
    const navigate = useNavigate()
    const {theme} = useTheme();
    return (
        <div className={css.Header}
        data-theme={theme}>
            <div className={css.genres}>
            <h2 onClick={()=>navigate('/main?page=1')}>COMPANY</h2>
                <TemporaryDrawer/>
            </div>
            <div className={css.themes}>
                <WbSunnyIcon/>
                <ThemeSwitcher/>
                <DarkModeIcon/>
            </div>
            <NavigationBlock/>
            <div>
                <SearchBlock/>
                <LoginBlock/>
            </div>
        </div>
    );
};

export default Header;