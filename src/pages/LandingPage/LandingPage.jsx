import React,  {useEffect, useState} from "react";
import {useMutation, useQuery} from "react-query";
import HttpClient from "@core/httpClient";
import {fetchSessions} from "./queries";
import CardSessionGhost from "./components/CardSessionGhost";

const CardSessions = React.lazy(() => import("./components/CardSessions"));


const LandingPage = (props) => {

    const {data} = useQuery('users',() => {
        return HttpClient.get('https://eternity.test/api/users')
    });


    return (

            <h1>Coucou</h1>


    )
};

export default LandingPage;