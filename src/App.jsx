import Calendary from "./Components/Calendary/Calendary";
import Header from "./Components/Users/Header";
import style from "./App.module.css"

function App () {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <Header />
                <Calendary/>
                {/* <Participantes/> */}
            </div>
        </div>

    );
}

export default App;