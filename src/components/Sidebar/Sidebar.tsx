import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {genreService} from "../../services/genreService";
import { useSearchParams} from "react-router-dom";
import css from './Sidebar.module.css'
import {useTheme} from "../../store/theme.ts";


const Sidebar = () => {
    const [genresArr, setGenresArr] = useState([]);
    useEffect(() => {
        genreService.getAll().then(({data}) => setGenresArr(data.genres));
    }, []);



    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen : boolean) => () => {
        setOpen(newOpen);
    };
    const [searchParams, setSearchParams] = useSearchParams();
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setSearchParams(prev => {
                            prev.delete('genre');
                            prev.set('page', '1');
                            return prev;
                        })}>
                            <ListItemText primary={'All genres'} />
                        </ListItemButton>
                    </ListItem>
                }
            </List>
            <Divider/>
            <List>
                {genresArr.map((genre) => (
                    <ListItem key={genre.id} disablePadding>
                        <ListItemButton onClick={()=> setSearchParams(prev => {
                            prev.set('genre', genre.id);
                            prev.set('page', 1);
                            return prev;
                        })}>
                            <ListItemText primary={genre.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const {theme} = useTheme();
    return (
        <div className={theme==='dark' ? css.Dark : css.Light}>
            <Button onClick={toggleDrawer(true)}>Choose genre</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default Sidebar;