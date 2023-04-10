import { Image, Box } from "@chakra-ui/react";
import logo from "../assets/rectLogo.png";

const Footer = () => {
    return (
        <footer>
            <Box display="flex" alignItems="center" justifyContent="center" margin={"auto"} gap="25px" padding="30px">
                <Image id="header-logo" src={logo} height={75} alt="logo img" />

                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} >
                    <h5>Navigation</h5>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservation</li>
                            <li>Order online</li>
                            <li>Login</li>
                        </ul>
                    </nav>
                </Box>

                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                    <h5>Contact</h5>
                    <nav>
                        <ul>
                            <li>Address</li>
                            <li>+1 111 111 111</li>
                            <li>test@meta.com</li>
                        </ul>
                    </nav>
                </Box>

                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                    <h5>Social Links</h5>
                    <nav>
                        <ul>
                            <li>facebook</li>
                            <li>instagram</li>
                        </ul>
                    </nav>
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;