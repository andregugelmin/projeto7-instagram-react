import ReactDOM from 'react-dom'
import Navbar from './Navbar';
import Corpo from './Corpo/Corpo';
import Fundo from './Fundo';

function App(){
    return(
        <div>
            <Navbar/>
            <Corpo/>
            <Fundo/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));