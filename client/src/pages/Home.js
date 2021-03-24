import React from 'react';

import BannerLandingPage from '../components/home/bannerLandingPage';
import PopularRestaurant from '../components/home/popularRestaurant';
import RestaurantNearYou from '../components/home/restaurantNearYou';

const Home = () => {
    return (
        <div>
            <BannerLandingPage />
            <PopularRestaurant />
            <RestaurantNearYou />
        </div>
    );
};

export default Home;
