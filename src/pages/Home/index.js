import Banner from '../../components/Banner';
import Carousel from '../../components/Carousel';
import styles from './Home.module.css';

function Home() {
    return (
        <>
        
            <Banner imagem="cubepc"/>
            <main className={styles.conteudoPrincipal}>
                <Carousel titulo="Básico" texto="Aprenda o Método Básico"/>
                <Carousel titulo="Avançado" texto="Aprenda o Método CFOP (Fridrich)"/>
                <Carousel titulo="ZZ" texto="Aprenda o Método ZZ partes 1 / 2 / 3 / 4 "/>
            </main>
            
        </>
    )
}

export default Home;