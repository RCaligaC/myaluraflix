import styles from './TituloCategoria.module.css';

function TituloCategoria({titulo, texto}) {
    return (
        <div className={styles.titulo}>
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </div>
    )
}

export default TituloCategoria;