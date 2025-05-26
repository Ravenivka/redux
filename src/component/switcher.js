import React from 'react';
import Switch from '@mui/material/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux';

export default function Switcher() {
    const theme = useSelector(state => state);
    const dispatch = useDispatch();
    
    const setTheme = () => {        
        dispatch({ type: 'SWITCH' });                    
    };

    function setColor (boo) {
        if (boo) {
            return 'black';
        } else {
            return 'green';
        }
    } 
    function setColor2 (boo) {
    if (boo) {
        return 'switcher_ligth';
    } else {
        return 'switcher_dark';
    }
    } 
    const text = (boo) => {
      if (boo) {
        return 'Светлая тема';
    } else {
        return 'Тёмная тема';
    }  
    }

    
    return (
        <>
        <div className='switcher' style={{backgroundColor: setColor(theme)}} >
            <DarkModeIcon sx={{color: 'white' }} />
            <Switch defaultChecked onClick={setTheme} />
            <LightModeIcon sx = {{color: 'gold' }} />            
        </div>
        <div className={setColor2(theme)} style={{with: '100%', height: "100%"}}>
            <h2 align="center">{text(theme)}</h2>
        </div>
        </>
    );
}
 