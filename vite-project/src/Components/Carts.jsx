import React from "react";
import Header from "./Header";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
function Carts(){

    const {id}=useParams();
    const getdata=useSelector((state)=>state.Cartreducer.carts);

    const compare=()=>{
        let comparedata=getdata.filter((e)=>{
            return e.id==id
        })
        
    }
    return(
        <>
        <div className="container text-center">
        <h3 className="mt-5">Card Details Page</h3>
        <div className="item_container">
            
        </div>
        </div>
            
        </>
    )
}
export default Carts;