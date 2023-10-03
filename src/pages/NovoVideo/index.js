import styles from './NovoVideo.module.css';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select } from "@mui/material";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';

function NovoVideo() {
    const [title, setTitle] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [videoImgLink, setVideoImgLink] = useState("");
    const [description, setDescription] = useState("");
    const [select, setSelect] = useState("");

    /* const navigate = useNavigate(); */

    /* const clean = () => {
        setDescription("");
        setSelect("");
        setTitle("");
        setVideoImgLink("");
        setVideoLink("");
    }; */

    /*  const onClean = (ev) => {
       ev.preventDefault();
       clean();
     }; */

    const onSave = (ev) => {
        ev.preventDefault();
        /* const novoVideo = {
            title,
            videoImgLink,
            videoLink,
            description,
            categoryDisplayName: select,
            categoryName: select.toLowerCase().replace(/\s/g, ""),
            id: uuidv4(),
        }; */
        /* videos.push(novoVideo);
        clean();
        alert("Video criado com sucesso!"); */
    };

    return (
        <Container>
            <div className={styles.novo}>
                <h1>Novo Video</h1>
            </div>
            <form className={styles.form} onSubmit={onSave}>
                <div className={styles.main}>
                    <TextField
                        className={styles.textField}
                        id="filled-basic"
                        variant="filled"
                        fullWidth
                        required
                        label="Titulo"
                        type="text"
                        value={title}
                        onChange={(ev) => setTitle(ev.target.value)}
                    />
                    <TextField
                        className={styles.textField}
                        id="filled-basic"
                        variant="filled"
                        fullWidth
                        required
                        label="Link do vídeo"
                        type="text"
                        value={videoLink}
                        onChange={(ev) => setVideoLink(ev.target.value)}
                    />
                    <TextField
                        className={styles.textField}
                        id="filled-basic"
                        variant="filled"
                        fullWidth
                        required
                        label="Link da imagem vídeo"
                        type="text"
                        value={videoImgLink}
                        onChange={(ev) => setVideoImgLink(ev.target.value)}
                    />
                    <FormControl
                        variant="filled"
                        className={styles.textField}
                        required
                        fullWidth
                    >
                        <InputLabel id="demo-simple-select-filled-label">
                            Escolha uma categoria
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={select}
                            onChange={(ev) => setSelect(ev.target.value)}
                        >
                            {/* {categories.map((category) => {
                  return (
                    <MenuItem
                      key={category.id}
                      value={category.categoryDisplayName}
                    >
                      {category.categoryDisplayName}
                    </MenuItem>
                  );
                })} */}
                        </Select>
                    </FormControl>

                    <TextField
                        className={styles.multilineField}
                        id="filled-basic"
                        variant="filled"
                        fullWidth
                        required
                        label="Descrição"
                        multiline
                        rows={4}
                        type="text"
                        value={description}
                        onChange={(ev) => setDescription(ev.target.value)}
                    />
                </div>
                <div className={styles.buttons}>
                    <div className={styles.buttonsLeft}>
                        <Link className={styles.link} to='/'>
                        <Botao texto="Salvar" />
                        </Link>

                        <Link className={styles.link} to='./'>
                        <Botao texto="Limpar" />
                        </Link>
                    </div>
                    <div className={styles.buttonsRight}>
                        <Link className={styles.link} to='/categorias'>
                            <Botao texto="Nova Categoria" />
                        </Link>
                    </div>
                </div>
            </form>

        </Container>
    )
}

export default NovoVideo;