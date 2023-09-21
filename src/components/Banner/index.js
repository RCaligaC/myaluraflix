import styles from './Banner.module.css';

function Banner({imagem}) {
    return (
        <div className={styles.banner} style={{backgroundImage: `url('./image/banner-${imagem}.png')`}}>

        </div>
    )
}

export default Banner;