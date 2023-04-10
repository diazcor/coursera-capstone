import { Card, Image, Box } from "@chakra-ui/react";
import SectionWrapper from "../../../components/Section";
import dishA from "../../../assets/bruchetta.svg"
import './TestimonialsSection.css';

const reviews = [
    {
        id: 0,
        rating: 5,
        name: 'Ilon',
        comment: 'The famous greek salad of crispy lettuce, peppers, olives',
        src: dishA,
    },
    {
        id: 1,
        rating: 5,
        name: 'Sherlok',
        comment: 'The famous greek salad of crispy lettuce, peppers, olives',
        src: dishA,
    },
    {
        id: 2,
        rating: 5,
        name: 'Harry',
        comment: 'The famous greek salad of crispy lettuce, peppers, olives',
        src: dishA,
    },
    {
        id: 3,
        rating: 5,
        name: 'Bob',
        comment: 'The famous greek salad of crispy lettuce, peppers, olives',
        src: dishA,
    }
];

const TestimonialsSection = () => {
    return (
        <SectionWrapper dark={true}>
            <div className="TestimonialsSection">
                <h1 className="TestimonialsSection__Heading">Testimonials</h1>

                <Box display={"grid"} gridTemplateColumns={"repeat(4, 1fr)"} gridColumnGap={"5px"}>
                    {reviews.map(item => {
                        return (
                            <Card borderRadius={16} bgColor={"white"} padding={"10px"}>
                                <Box marginBottom={"10px"}>
                                    <h5 className="Reviewer__name">{item.name}</h5>
                                    <h6 className="Reviewer__rating">Rating {item.rating} / 5</h6>
                                </Box>

                                <p className="Reviewer__comment">{item.comment}</p>
                            </Card>
                        );
                    })}
                </Box>
            </div>
        </SectionWrapper >
    );
};

export default TestimonialsSection;