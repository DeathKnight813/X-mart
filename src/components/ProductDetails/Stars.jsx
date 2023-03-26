import { BsStar, BsFillStarFill, BsStarHalf } from '../../utils/index';

const Stars = ({ rating }) => {
    return Array.from({ length: 5 }, (_, ind) => {
        if (ind + 1 <= rating) {
            return <BsFillStarFill key={ind} />;
        }

        if (ind + 1 > rating && ind + 1 === Math.ceil(rating)) {
            return <BsStarHalf key={ind} />;
        }

        return <BsStar key={ind} />;
    });
};

export default Stars;
