import { Box } from '@chakra-ui/react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionWrapper from "../components/Section";
import Form from '../form/Form';

const Reservation = () => {
    return (
        <main>
            <Navbar />
            <SectionWrapper dark={true}>
                <Box display="flex" height="100%" justifyContent="center" alignItems="center">
                    <Form />
                </Box>
            </SectionWrapper >
            <Footer />
        </main >
    );
};

export default Reservation;