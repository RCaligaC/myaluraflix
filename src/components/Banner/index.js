import styles from './Banner.module.css';
import Titulo from '../Titulo'
import { Link } from 'react-router-dom';
import Botao from '../Botao';
import VideoCard from '../VideoCard';


function Banner({ imagem }) {
    return (
        <section className={styles.banner} style={{ backgroundImage: `url('./image/banner-${imagem}.jpg')` }}>


            <div className={styles.botao}>
                <Link className={styles.link} to='./novovideo'>
                    <Botao texto="Novo video" />
                </Link>
            </div>

            <div className={styles.caixaBanner}>
                <div className={styles.titulo}>
                    <Titulo titulo="Cube Rubik" texto="Exercite a memória, resolvendo o Cubo Mágico!" />
                </div>

                <Link to="https://www.youtube.com/watch?v=0iePBCRcs24&t=3s" target='_blank'><VideoCard videoCard="https://i.ytimg.com/vi/0iePBCRcs24/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgMf51CxSJSzzTssanaiowtg6Tfg" /></Link>
            </div>

        </section>
    )
}

export default Banner;