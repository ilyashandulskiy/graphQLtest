import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { GET_COUNTRY } from "../query/country";
import { IcountryDetails, Ilanguage } from "../types";

function CountryScreen() {
    const { country } = useParams()
    const { data } = useQuery<{country: IcountryDetails}>(GET_COUNTRY({ id: country }))

    const table = data && (
        <table className="table table-striped">
            <tbody>
                <tr>
                    <td>Native language</td>
                    <td>{data.country.native}</td>
                </tr>
                <tr>
                    <td>Capital city</td>
                    <td>{data.country.capital || 'None'}</td>
                </tr>
                <tr>
                    <td>Currency</td>
                    <td>{data.country.currency}</td>
                </tr>
                <tr>
                    <td>Languages</td>
                    <td>{data.country.languages.map((language: Ilanguage) => language.name + ', ')}</td>
                </tr> 
            </tbody>
        </table>
    )

    return ( 
        <div className="page">
            <h2>{data?.country.name}</h2>
            {data ? table : <Spinner />}
        </div>
     );
}

export default CountryScreen;