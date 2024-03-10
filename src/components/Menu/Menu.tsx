import React from 'react';
import classes from './Menu.module.css';

interface MenuItem {
    id: string;
    description: string;
}
  
interface MenuProps {
    src: string;
    name: string;
    menuItems: MenuItem[];
    activeMenuItem: string;
    onMenuClick: (menuItem: string) => void;
}

const Menu: React.FC<MenuProps> = ({ src, name, menuItems, activeMenuItem, onMenuClick }) => {
    return (
        <div className={classes.Menu}>
            <div style={{padding: '45px 0'}}>
                <div className={classes.LogoBlock}>
                    <img className={classes.img} src={src}/>
                    <div className={classes.Name}>{name}</div>
                </div>
                <div>
                    <ul>
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className={activeMenuItem === item.id ? classes.ActiveMenuItem : classes.NoneActiveMenuItem}
                                onClick={() => onMenuClick(item.id)}
                            >
                                {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default Menu;
