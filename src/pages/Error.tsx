import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div id="error">
            <img src="../public/404-image.png" alt="" />
            <h1>Oops!<br/>Esta página não existe!</h1>
            <Link to='/'>Voltar ao começo!</Link>
        </div>
    )
}