import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { NavLink } from 'react-router-dom';

import './Footer.css'


const FooterPagePro = () => {
    return (
        <MDBFooter color="mdb-color" className="font-small pt-4 footer">
            <MDBContainer className="text-center text-md-left">
                <MDBRow className="text-center text-md-left mt-3 pb-3">
                    <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">
                            Stocked
                        </h6>
                        <p>
                            Here you can use rows and columns here to organize your footer
                            content. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                    </MDBCol>
                    <hr className="w-100 clearfix d-md-none" />
                    <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                        <p>
                            <a href="#!">MDBootstrap</a>
                        </p>
                        <p>
                            <a href="#!">MDWordPress</a>
                        </p>
                        <p>
                            <a href="#!">BrandFlow</a>
                        </p>
                        <p>
                            <a href="#!">Bootstrap Angular</a>
                        </p>
                    </MDBCol>
                    <hr className="w-100 clearfix d-md-none" />
                    <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">
                            Useful links
                        </h6>
                        <p>
                            <NavLink to="/" exact>Stocked</NavLink>
                        </p>
                        <p>
                            <NavLink to="/stock">Stock Market</NavLink>
                        </p>
                        <p>
                            <NavLink to="/algorithm">Algorithm</NavLink>
                        </p>
                        <p>
                            <NavLink to="/about">About</NavLink>
                        </p>
                    </MDBCol>
                    <hr className="w-100 clearfix d-md-none" />
                    <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p>
                            <i className="fa fa-home mr-3" /> Jerusalem, Israel
                        </p>
                        <p>
                            <i className="fa fa-envelope mr-3" /> philip7zachary@gmail.com
                        </p>
                        <p>
                            <i className="fa fa-phone mr-3" /> + 972 544353135
                        </p>
                        <p>
                            <i className="fa fa-envelope mr-3" /> isaacmichaan@hotmail.com
                        </p>
                        <p>
                            <i className="fa fa-phone mr-3" /> + 972 583235002
                        </p>
                    </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className="d-flex align-items-center">
                    <MDBCol md="8" lg="8">
                        <p className="text-center text-md-left grey-text">
                            &copy; {new Date().getFullYear()} Copyright:{" "}
                            Philip Pinta & Isaac Michaan
                        </p>
                    </MDBCol>
                    <MDBCol md="4" lg="4" className="ml-lg-0">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/philip-zachary-1b92b5103/" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/isaacmichaan1/" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://twitter.com/PintaPhilip/" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://twitter.com/isaacmichaan1/" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="http://github.com/philprogram/" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-github" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://github.com/isaacmichaan/" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                                        <i className="fab fa-github" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    );
}

export default FooterPagePro;