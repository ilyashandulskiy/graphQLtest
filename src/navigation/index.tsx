import React from "react";
import { Route, Routes } from "react-router-dom";
import ContinentsScreen from "../screens/Continents";
import CountriesScreen from "../screens/Countries";
import CountryScreen from "../screens/Country";

function Navigation() {
    return ( 
        <Routes>
            <Route path="/" element={<ContinentsScreen />} />
            <Route path="/:continent" element={<CountriesScreen />} />
            <Route path="/:continent/:country" element={<CountryScreen />} />
        </Routes>
     );
}

export default Navigation;