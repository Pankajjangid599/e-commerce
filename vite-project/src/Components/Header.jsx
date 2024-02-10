import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Carts from "./Carts";
function Header() {
  const getdata = useSelector((state) => state.Cartreducer.carts);
  console.log("helo===========");
  console.log(getdata);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#">
            Add To Cart
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  class="nav-link active text-light"
                  aria-current="page"
                  href="#"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
            </ul>
            <span class="navbar-text  ">
              <NavLink
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                
              >
                <i class="fa-solid fa-cart-plus trolly mx-5">
                  <span className="badge  rounded-pill bg-primary text-white" style={{fontSize:"0.6rem"}}>
                    {getdata.length}</span>  </i>
             
              </NavLink>
              <table>
              <div
                class="modal fade"  id="exampleModal" tabindex="-1" aria-hidden="true"
                aria-labelledby="exampleModalLabel" >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                  
                        <thead>
                          <tr>
                            <th className="px-5">Photo</th>
                            <th>Restarunt Name</th>
                          </tr>
                        </thead>
                       
                      <button  type="button" class="btn-close" data-bs-dismiss="modal"
                       aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <tbody>
                          {
                            getdata.map((e)=>{
                              return(
                                <>
                                  <tr>
                                    <td> 
                                      <NavLink to={`/carts/${e.id}`}>
                                      <img src={e.imgdata} style={{width:"5rem"}} alt="" />
                                      </NavLink>
                                    
                                    </td>
                                    <td>
                                      <p className="px-4">{e.rname}</p>
                                      <p className="px-4">Price : ₹{e.price}</p>
                                      <p className="px-4">Quantity : {e.qnty}</p>
                                      <p style={{cursor:"pointer"}}><i class="fa-solid fa-trash text-danger px-5"></i></p>
                                    </td>
                                  </tr>
                                </>
                              )
                            })
                          }
                      </tbody>
                    </div>
                    <div class="modal-footer text-center border">
                          <p>Total : ₹ 300</p>
                    </div>
                  </div>
                </div>
              </div>
              </table>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
export default Header;
