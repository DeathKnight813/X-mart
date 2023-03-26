import BestSellers from '../components/Home/BestSellers';
import Features from '../components/Home/Features';
import Hero from '../components/Home/Hero';
import SellMarketPlace from '../components/Home/SellMarketPlace';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <BestSellers />
            <SellMarketPlace/>
        </>
    );
};

export default HomePage;
