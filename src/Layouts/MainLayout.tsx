import {Outlet} from "react-router-dom";

import Header from "../components/Header/Header";
import css from './MainLayout.module.css'
import {useTheme} from "../store/theme.ts";



const MainLayout = () => {
    const {theme} = useTheme();

    return (
        <div className={css.MainLayout}
        data-theme={theme}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;