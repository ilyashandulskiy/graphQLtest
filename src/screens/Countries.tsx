import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { GET_COUNTRIES } from "../query/country";
import { Icountry } from "../types";

function CountriesScreen() {

    const { continent } = useParams()
    const { data } = useQuery<
        {
            continent:
            {
                name: string,
                countries: Icountry[]
            }
        }
    >(GET_COUNTRIES({ id: continent }))
    
    return ( 
        <div className="page">
            <h2>Countries in {data?.continent.name || continent}</h2>
            <div className="cards">
                {data ? data.continent.countries.map((country: Icountry) => 
                    <Card
                        key={country.code}
                        title={country.name}
                        code={country.code}
                    />
                ) : <Spinner />}
            </div>
        </div>
     );
}

export default CountriesScreen;