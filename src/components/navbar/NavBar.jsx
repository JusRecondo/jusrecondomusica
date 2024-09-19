import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { MdOutlineMenu, MdClose  } from 'react-icons/md';

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = () => setOpenMenu(!openMenu);

    const closeMenu = () => setOpenMenu(false);

    const menuItems = [
        {path: '/', text: 'inicio'},
        {path: '/bio', text: 'bio'},
        {path: '/links', text: 'links'},
    ];

    return (
        <nav className={styles.navbar}>
            <button className={styles.menuButton} onClick={handleClick} aria-label="abrir o cerrar menu">
                {openMenu ? <MdClose size={'1.8em'}/> : <MdOutlineMenu size={'1.8em'}/> }
            </button>
            <ul
                className={
                    openMenu ? `${styles.menu} ${styles.openMenu}` : styles.menu
                }
            >
                {menuItems.map((item, idx) =>
                    <li key={idx}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.menuLink} ${styles.active}`
                                    : styles.menuLink
                            }
                            onClick={closeMenu}
                        >
                            {item.text}
                        </NavLink>
                </li>
                )}

            </ul>
        </nav>
    );
};

export default NavBar;
