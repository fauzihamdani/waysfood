import React, { useContext, useEffect } from 'react';

import BannerLandingPage from '../components/home/bannerLandingPage';
import PopularRestaurant from '../components/home/popularRestaurant';
import RestaurantNearYou from '../components/home/restaurantNearYou';

import AuthContext from '../contexts/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);

    return (
        <div>
            <BannerLandingPage />
            <PopularRestaurant />
            <RestaurantNearYou />
        </div>
    );
};

export default Home;
