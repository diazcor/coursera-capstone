import { useNavigate } from 'react-router-dom';
import { Card, Image, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import SectionWrapper from "../../../components/Section";
import salad from "../../../assets/greek salad.jpg"
import bruchetta from "../../../assets/bruchetta.svg"
import dessert from "../../../assets/lemon dessert.jpg"
import './SpecialSection.css';

const food = [
    {
        id: 0,
        title: 'Greek salad',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
        price: '12.99',
        src: salad,
    },
    {
        id: 1,
        title: 'Bruchetta',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        price: '5.99',
        src: bruchetta,
    },
    {
        id: 2,
        title: 'Lemon Dessert',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        price: '5.00',
        src: dessert,
    }
];

const SpecialSection = () => {
    const navigate = useNavigate();

    return (
        <SectionWrapper>
            <div className="SpecialSection">
                <div className="SpecialSection__Heading">
                    <h1 className="SpecialSection__Heading__Text">Specials</h1>

                    <button onClick={() => navigate('/online-menu')} className="action-btn">
                        <p className="action-btn-children">Online menu</p>
                    </button>
                </div>

                <div className="SpecialSection__Cards">
                    <Box display="grid" gridTemplateColumns={"repeat(3, 1fr)"} gridColumnGap={"5px"}>
                        {food.map(item => {
                            return (
                                <Card borderRadius={16} key={item.id} bgColor={"#495E57"}>
                                    <Image fit="cover" src={item.src} minHeight={142} maxHeight={142} borderTopRadius={16} />
                                    <Box padding={10}>
                                        <Box className="SpecialSection__Cards__heading" display={"flex"} justifyContent={"space-between"}>
                                            <h3 className="SpecialSection__Cards__title">{item.title}</h3>
                                            <h5 className="price">$ {item.price}</h5>
                                        </Box>

                                        <h5 className="SpecialSection__Cards__desctiption">{item.description}</h5>

                                        <h4 className="SpecialSection__Cards__order">
                                            Order delivery
                                            <FontAwesomeIcon icon={faMotorcycle} />
                                        </h4>
                                    </Box>
                                </Card>
                            );
                        })}
                    </Box>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default SpecialSection;