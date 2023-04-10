import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionWrapper from "../components/Section";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <main>
            <Navbar />
            <SectionWrapper dark={true}>
                <Box display="flex" height="100%" justifyContent="center" alignItems="center">
                    <div onClick={() => navigate('/')} className="action-btn">
                        <p className="action-btn-children">go home</p>
                    </div>
                </Box>
            </SectionWrapper>
            <Footer />
        </main>
    );
};

export default NotFound;