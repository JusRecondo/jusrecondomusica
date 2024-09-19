import NavBar from '../navbar/NavBar';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>jus recondo</h1>
            <NavBar />
        </header>
    )
}

export default Header;