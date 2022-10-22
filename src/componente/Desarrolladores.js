import '../style/desarrolladores.css';
import HeaderDevs from './desarrolladores/HeaderDevs';
import DevsMain from './desarrolladores/DevsMain';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import sonido1 from '../sounds/sonido1.mp3';

function Desarrolladores() {
    function play(){
        new Audio(sonido1).play();
    }
    return (
        <>
            <div className="container-fluid">
                <HeaderDevs />
                <DevsMain />
                <Button variant="warning" >
                    <Link to='/' className="btn btn-principal"  onClick={play}>Volver</Link>
                </Button>            
            </div>

        </>
    )
};

export default Desarrolladores