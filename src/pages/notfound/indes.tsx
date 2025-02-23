import styles from './notfound.module.css'

export function Notfound(){
    return(
        <div className={styles.erro}>
            <h1>Erro 404, Ésta página não existe!</h1>
        </div>
    )
}