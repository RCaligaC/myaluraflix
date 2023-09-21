import { Link } from 'react-router-dom';
import logo from './Logo.png';
import styles from './Menu.module.css';
import Botao from '../Botao';

function Menu() {
    return (
        <header className={styles.menu}>
            <Link to='./'>
                <img src={logo} alt='Logo do aluraflix'></img>
            </Link>

            <Botao texto="Novo video" />

        </header>
    )
}

export default Menu;