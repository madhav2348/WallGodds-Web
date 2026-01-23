import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/HomeModule/Home";
import Gallery from "./Components/GalleryModule/Gallery";
import Upload from "./Components/UploadModule/Upload";
import SignUp from "./Components/CommonModule/SignUpModule/SignUp";
import Profile from "./Components/ProfileModule/Profile";
import Error404 from "./Components/CommonModule/ErrorModule/Error404";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
    return (
        <Router>
            <Analytics />
            <SpeedInsights />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery/*" element={<Gallery />} />
                <Route path="/upload" element={<Upload />} />

                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />

                <Route path="/*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}

export default App;
