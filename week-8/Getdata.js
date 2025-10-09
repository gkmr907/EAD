import React, { useState } from "react";
const Getdata = ()=>{
    const url="https://jsonplaceholder.typicode.com/users";

    const [print , setprint] = useState([]);


    const apicalls = async (apiURL) => {
        const response = await fetch(apiURL);
        console.log("this is here 1");
        console.log(response);
        const data =await response.json();

        console.log("this is here 2");
        console.log(data);
        setprint(data);

    }
    apicalls(url);

    return(
        <div>
            {
            print.map(function(item){
                return (
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.id}</p>
                        <p>{item.email}</p>
                        <p>{item.address.street}</p>
                        <p>{item.address.city}</p>
                        <p>{item.phone}</p>
                        <p>{item.website}</p>
                        <br>
                        </br>
                    </div>
                )

            })
}
        </div>
    )

}

export default Getdata;