import React, { useState } from "react";
import Data from "./Data";
import { useDispatch } from "react-redux";
import Add from "../Redux/Action/Action";
function CardDetails() {
  const [data, setData] = useState(Data);
  console.log(Data);

  const dispatch=useDispatch();

  const send=(e)=>{
   
    console.log(e)
    dispatch(Add(e))
  }
  return (
    <>
      <h3 className="text-center pt-5 pb-3">Add to cart project </h3>
      <div className="container">
        <div className="row   ">
          <div className="col items">
         
            {data.map((element, data) => {
              return (
                <>
                  <div class="card " >
                    <img src={element.imgdata} style={{height:"16rem"}} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{element.rname}</h5>
                      <p class="card-text">
                       Price :  ₹{element.price}
                      </p>
                      <div className="button_div d-flex justify-content-center">
                      <a href="#" class="btn btn-primary col-lg-12" onClick={()=> send(element)} >
                        Add To Cart
                      </a>
                      </div>
                      
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default CardDetails;
