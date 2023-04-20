import Calendary from "./Components/Calendary/Calendary";
import Header from "./Components/Users/Header";
import style from "./App.module.css";
import Modal from "./Components/Users/Modal";
// import Participantes from "./Components/Users/Participantes";

function App () {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <Modal />
                <Header />
                <Calendary/>
                {/* <Participantes /> */}
            </div>
        </div>

    );
}

export default App;