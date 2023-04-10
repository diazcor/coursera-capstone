import { Image, Box } from "@chakra-ui/react";
import SectionWrapper from "../../../components/Section";
import aboutpic from "../../../assets/aboutpic.png";
import './AboutSection.css';

const AboutSection = () => {
    return (
        <SectionWrapper>
            <Box display={"flex"} className="AboutSection" gap="15px">
                <Box>
                    <h1 className="AboutSection__Title">Little Lemon</h1>
                    <h3 className="AboutSection__Title">Chicago</h3>

                    <p className="AboutSection__Description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Box>

                <Image height="325px" src={aboutpic} alt="founders pictures" />
            </Box>
        </SectionWrapper>
    );
};

export default AboutSection;