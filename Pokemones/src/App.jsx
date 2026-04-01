import {Button} from "./componentes/Button";
import "./sass/App.scss"

const App = () => {
    return(
        <>
            {/*/ tarjetas */}
            <div className="buttons-containers">
            <Button text= "Anterior" />
            <Button text= "siguiente"/>
            </div>
        </>
    )
}

export{App}