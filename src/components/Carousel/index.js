import VideoCard from '../VideoCard';
import styles from './Carousel.module.css';
import videos from '../../json/db.json';
import TituloCategoria from '../TituloCategoria';
import { Link } from 'react-router-dom';
// import setaDireita from './seta-direita.png';
// import setaEsquerda from './seta-esquerda.png'

function Carousel({ titulo, texto }) {

    const filtros = videos.filter(video => video.categoria === titulo);
    console.log(filtros);


    return (

        <section className={styles.container}>
            {/* <img className={styles.setaDireita} src={setaDireita} alt='Seta a Direita' />
            <img className={styles.setaEsquerda} src={setaEsquerda} alt='Seta a Esquerda' /> */}
            {/* <Titulo titulo="Básico" texto="Aprenda a resolver pelo Método Básico" /> */}
            <TituloCategoria titulo={titulo} texto={texto} />

            <div className={styles.galleryContainer}>

                <div className={styles.gallery}>

                    {filtros.map((video) => {

                        return <Link to={video.urlVideo} target='_blank'><VideoCard videoCard={video.urlImagem} key={video.id} /></Link>

                    })}
                </div>
            </div>


        </section>
    )
}

export default Carousel;