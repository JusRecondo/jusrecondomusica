import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <h1>jus recondo</h1>
            </Link>
            <NavBar />
        </header>
    )
}

export default Header;