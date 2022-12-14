import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from "next/image";
import { Form } from "react-bootstrap";
import { userData } from "../../services/API/logInUser";

const Header: React.FC = () => {
    const [show, setShow]   = useState(false);
    const handleClose       = () => setShow(false);
    const handleShow        = () => setShow(true);

    return (
        <Navbar className="header__wraper" expand="lg" fixed="top">
        <Container>
            <Link  href="/" passHref>
                <Navbar.Brand>
                    <span className="pe-lg-2 d-none d-lg-inline-block"><BsInstagram /></span>
                    <span className="">Instagram</span>
                </Navbar.Brand>
            </Link>
            <div className="mobile__menu--icon d-lg-none">
                <ul className="d-flex">
                    <li>
                        <AiOutlineSearch />
                    </li>
                    <li><AiOutlineMessage /></li>
                    <li><IoMdNotificationsOutline /></li>
                    <li>
                        <Image
                            src={userData?.photo}
                            alt={userData?.name}
                            width={30}
                            height={30}
                            style={{ borderRadius: "50%" }}
                        />
                    </li>
                    <li style={{ cursor: "pointer" }} onClick={handleShow}>
                        <svg
                            width="18"
                            height="18"
                            fill="none"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                            fill="currentColor"
                            d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"
                            ></path>
                        </svg>
                    </li>
                </ul>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Suggestions For You</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="profile__layout d-flex justify-content-between">
                            <div className="d-flex">
                                <Image
                                    src="/assets/images/user.jpg"
                                    alt="user photo"
                                    width={60}
                                    height={60}
                                    style={{ borderRadius: "50%" }}
                                />
                                <div className="d-flex align-items-center ps-2">
                                    <div>
                                        <p className="user__name">maruf43</p>
                                        <p>Followed by arif</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <p className="switch__text">Follow</p>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav className="me-auto">
                    <Form>
                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Search" />
                        </Form.Group>
                    </Form>
                </Nav>
                <Nav className="right__sec">
                    <Nav.Link>
                        <AiOutlineMessage />
                    </Nav.Link>
                    <Nav.Link href="#memes">
                        <IoMdNotificationsOutline />
                    </Nav.Link>
                    <Nav.Link>
                        <Image
                            src={userData?.photo}
                            alt={userData?.name}
                            width={30}
                            height={30}
                            style={{ borderRadius: "50%" }}
                            priority
                        />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;
