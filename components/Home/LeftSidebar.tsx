import React, { useState } from 'react';
import Image from 'next/image';
import { Form } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { FiSave } from "react-icons/fi";

const LeftSidebar: React.FC = () => {
    const [showComment, setShowComment] = useState<boolean>(false);
    const [readMore, setReadMore]       = useState<boolean>(false);

    return (
        <div className="left__section">
            <div className="stroies__section">
                <div className="text-center each__section">
                    <Image
                        src="/assets/images/user.jpg"
                        alt="user photo"
                        width={100}
                        height={100}
                        style={{ borderRadius: "50%" }}
                    />
                    <p>Kathy Morgan</p>
                </div>
            </div>
            <div className="post__section">
                <div className="post__header d-flex justify-content-between">
                    <div className="d-flex">
                        <Image
                            src="/assets/images/user.jpg"
                            alt="user photo"
                            width={50}
                            height={50}
                            style={{ borderRadius: "50%" }}
                        />
                        <div className="d-flex align-items-center">
                            <p className="ps-3">Kathy Morgan</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <p>...</p>
                    </div>
                </div>
                <div className="image__section">
                    <Image
                        src="/assets/images/user.jpg"
                        alt="user photo"
                        layout="responsive"
                        width={450}
                        height={450}
                    />
                </div>
                <div className="content__section">
                    <div className="main__content">
                        <div className="reaction d-flex justify-content-between">
                            <ul className="d-flex">
                                <li><FiHeart /></li>
                                <li onClick={() => setShowComment(!showComment)}><AiOutlineComment /></li>
                                <li><FiShare2 /></li>
                            </ul>
                            <p><FiSave /></p>
                        </div>
                        <p className="like"><strong>12</strong> Likes</p>
                        {
                            readMore ? 
                                (
                                    <p className="discreption">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis delectus unde distinctio. Assumenda quisquam veniam sunt inventore aperiam molestias molestiae voluptates iusto tempora impedit quia ratione, dolore, et ea! Debitis iure exercitationem saepe cum omnis consectetur aut aliquam inventore.
                                    </p>
                                )
                                : (
                                    <p className="discreption">
                                        Lorem ipsum dolor sit amet ... <a onClick={() => setReadMore(true)}>More</a>
                                    </p>
                                )
                        }
                        
                        <p className="all__comments" onClick={() => setShowComment(!showComment)}><a>View all 2 Comments</a></p>
                        {
                            showComment && (
                                <div className="comments">
                                    <div className="each__comment d-flex pt-3">
                                        <div className="d-flex">
                                            <Image
                                                src="/assets/images/user.jpg"
                                                alt="user photo"
                                                width={30}
                                                height={30}
                                                style={{ borderRadius: "50%" }}
                                            />
                                            <div className="d-flex align-items-center ps-2 name">
                                                <p>Kathy Morgan</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center ps-3">
                                            <p className="comment__text">Nice Picture</p>
                                        </div>
                                    </div>
                                    <div className="each__comment d-flex pt-3">
                                        <div className="d-flex">
                                            <Image
                                                src="/assets/images/user.jpg"
                                                alt="user photo"
                                                width={30}
                                                height={30}
                                                style={{ borderRadius: "50%" }}
                                            />
                                            <div className="d-flex align-items-center ps-2 name">
                                                <p>Kathy Morgan</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center ps-3">
                                            <p className="comment__text">Nice Picture</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="write__comment">
                        <Form>
                            <Form.Group className="position-relative" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Add a comment..." />
                                <button type="submit">Post</button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar