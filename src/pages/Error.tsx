import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div id="error">
            <img src="https://static-00.iconduck.com/assets.00/loudly-crying-face-emoji-1024x1024-jw9wlhc7.png" alt="" />
            <h1>Oops!<br/>Esta página não existe!</h1>
            <Link to='/'>Voltar ao começo!</Link>
        </div>
    )
}