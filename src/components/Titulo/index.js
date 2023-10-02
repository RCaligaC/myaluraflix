import styles from './Titulo.module.css';

function Titulo({titulo, texto}) {
    return (
        <div className={styles.titulo}>
            <h1>{titulo}</h1>
            <p>{texto}</p>
            <p className={styles.descricao}>Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.</p>
        </div>
    )
}

export default Titulo;