import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTINETS } from "../query/continent";
import Card from "../components/Card";
import { Icontinent } from "../types";
import Spinner from "../components/Spinner";

function ContinentsScreen() {
    const { data } = useQuery<{continents: Icontinent[]}>(GET_CONTINETS)

    return ( 
        <div className="page">
            <h2>Continents</h2>
            <div className="cards">
                {data ? data.continents.map((continent: Icontinent) =>
                    <Card
                        key={continent.code}
                        title={continent.name}
                        code={continent.code}
                    />
                ) : <Spinner />}
            </div>
        </div>
     );
}

export default ContinentsScreen;