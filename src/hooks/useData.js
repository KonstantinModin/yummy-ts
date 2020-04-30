import React, { useState, useEffect } from "react";
import axios from "axios";

const useData = () => {
    const [{ loading, data, error }, setState] = useState({
        loading: false,
        data: {},
        error: null,
    });

    const getData = async () => {
        setState((state) => ({ ...state, loading: true }));
        try {
            const response = await axios.get("https://api.yummly.com/v1");
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
