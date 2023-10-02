import styles from './Banner.module.css';
import Titulo from '../Titulo'
import { Link } from 'react-router-dom';
import Botao from '../Botao';

function Banner({imagem}) {
    return (
        <section className={styles.banner} style={{backgroundImage: `url('./image/banner-${imagem}.jpg')`}}>
            <div className={styles.botao}>
                <Link className={styles.link} to='./novovideo'>
                    <Botao texto="Novo video" />
                </Link>
            </div>
            <div className={styles.titulo}>
                <Titulo titulo="Cube Rubik" texto="Exercite a memória, resolvendo o Cubo Mágico!"/>
            </div>
        </section>
    )
}

export default Banner;