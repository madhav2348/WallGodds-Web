import Styles from "./Gallery.module.css";
import NavBar from "../CommonModule/NavBarModule/NavBar";

const Gallery = () => {
    return (
        <div className={Styles.container}>
            <NavBar />
        </div>
    );
};

export default Gallery;

// reference of old code:
{
    /* <Routes>
    <Route path="mobile" element={<Mobile />} />
    <Route path="tablet" element={<Tablet />} />
    <Route path="desktop" element={<Desktop />} />
    </Routes>; */
}
