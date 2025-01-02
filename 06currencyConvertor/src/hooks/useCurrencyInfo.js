import { useState, useEffect } from "react";

function useCurrencyInfo(currency)
{
    const[data,setData]= useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json()) //callback where res is response
            .then((res) => setData(res[currency]))  //here currency is key
            console.log(data);   
    },[currency] )
    console.log(data);
    return data;
}

export default useCurrencyInfo;