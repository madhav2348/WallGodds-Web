import NavBar from "../CommonModule/NavBarModule/NavBar";
import Footer from "../CommonModule/FooterModule/Footer";
import Styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className={Styles.container}>
                <div className={Styles.temp}>
                    <p>This section is under development. Stay tuned!</p>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
