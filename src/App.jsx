import Calendary from "./Components/Calendary/Calendary";
import Header from "./Components/Users/Header";
import style from "./App.module.css";
import Modal from "./Components/Users/Modal";
import Footer from "./Components/Users/Footer";
import News from "./Components/News/News";

function App () {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <Modal />
                <News />
                <Header />
                <Calendary/>
                <Footer />
            </div>
        </div>

    );
}

export default App;