import styles from '../css/modules/copyRight.module.css'

export default () => {
    return (
        <footer className={styles.copyRight}>
            <div id='contacts'>
                <h2>Contate-nos</h2>
                <p>Tem uma pergunta ou precisa de ajuda? Entre em contato com nossa equipe de suporte em support@lizardhelp.com ou ligue para 1-800-LIZARD-HELP.</p>
            </div>
            <p>&copy; 2024 LizardHelp. All rights reserved.</p>
        </footer>
    )
}