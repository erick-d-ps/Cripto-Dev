import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>Todos os diretitos reservados.</h3>
        <p className={styles.conteudo}>
          Desenvolvido por Erick de Paula Souza como parte de meus estudos em
          desenvolvimento web. Conheça nosso <a target="_black" rel="externel" href="https://www.instagram.com/erick__dps?igsh=MXRob3VramYyNXQwdg==">Instagran</a> Email: dncellassistec@gmail.com  <a target="_black" rel="externel" href="https://github.com/erick-d-ps">github</a>, <a href="https://www.linkedin.com/in/erick-de-paula-souza-938260337/" target="_black" rel="externel">Linkedin</a>
        </p>
      </div>
    </footer>
  );
}
