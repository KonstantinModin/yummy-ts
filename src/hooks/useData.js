import { useState, useEffect } from "react";
import axios from "axios";

const useData = () => {
    const [{ loading, data, error }, setState] = useState({
        loading: false,
        data: {},
        error: null,
    });

    const getData = async () => {
        setState((state) => ({ ...state, loading: true }));
        const ID = "87F9BC8D71899D5B";
        const KEY =
            "2p2eEI1jhSF8FCCsOQZXRRe+XnCbzG36LEBUGFhCmSPMtxCPHtIaEfXxbYIU12tC/rmQgZYWTnU=";
        const config = {
            headers: {
                "Content-Type": "application/json",
                "X-Yummly-App-ID": "29bc3e83",
                "X-Yummly-App-Key": "e47af4293b45524b06ac7f4f37b20da4",
                "Access-Control-Allow-Origin": true,
            },
        };

        try {
            const response = await axios.get(
                `https://api.yummly.com/v1/api`,
                config
            );
            setState((state) => ({
                ...state,
                loading: false,
                data: response.data,
                error: null,
            }));
        } catch (error) {
            setState((state) => ({ ...state, error, loading: false }));
            console.error("sthg wnt wrng");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return [loading, data, error];
};

export default useData;
