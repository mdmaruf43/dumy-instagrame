import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { FiSave } from "react-icons/fi";
import Image from 'next/image';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PostDataType from '../../dto/PostDataType';
import { BsThreeDots } from "react-icons/bs";

interface PropsDataType {
    post: PostDataType;
}

const SinglePost: React.FC<PropsDataType> = ({ post }) => {
    const [showComment, setShowComment] = useState<boolean>(false);
    const [readMore, setReadMore]       = useState<boolean>(false);

    return (
        <div className="post__section">
            <div className="post__header d-flex justify-content-between">
                <div className="d-flex">
                    <Image
                        src={post?.user?.photo}
                        alt={post?.user?.name}
                        width={50}
                        height={50}
                        style={{ borderRadius: "50%" }}
                    />
                    <div className="d-flex align-items-center">
                        <p className="ps-3">{post?.user?.name}</p>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <button type="button"><BsThreeDots /></button>
                </div>
            </div>
            <div className="image__section">
                <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        post?.photos?.map((photo, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={photo?.path}
                                    alt="user photo"
                                    layout="responsive"
                                    width={350}
                                    height={250}
                                    priority
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="content__section">
                <div className="main__content">
                    <div className="reaction d-flex justify-content-between">
                        <ul className="d-flex">
                            <li>{post?.is_liked ? <span className="liked"><FiHeart /></span> : <span><FiHeart /></span>}</li>
                            <li onClick={() => setShowComment(!showComment)}><AiOutlineComment /></li>
                            <li>
                                {
                                    post?.is_saved ? <span className="saved"><FiShare2 /></span> : <span><FiShare2 /></span>
                                }
                            </li>
                        </ul>
                        <p><FiSave /></p>
                    </div>
                    <p className="like"><strong>{post?.total_likes}</strong> Likes</p>
                    {
                        readMore ? 
                            (
                                <p className="discreption">
                                    {post?.description}
                                </p>
                            )
                            : (
                                <p className="discreption">
                                    {post?.description?.slice(0, 100)}... <a onClick={() => setReadMore(true)}>More</a>
                                </p>
                            )
                    }
                    
                    <p className="all__comments" onClick={() => setShowComment(!showComment)}><a>View all {post?.comments?.length} Comments</a></p>
                    {
                        showComment && (
                            <div className="comments">
                                {
                                    post?.comments?.map((comment, index) => (
                                        <div key={index} className="each__comment d-flex pt-3">
                                            <div className="d-flex">
                                                <Image
                                                    src={comment?.user?.photo}
                                                    alt={comment?.user?.name}
                                                    width={30}
                                                    height={30}
                                                    style={{ borderRadius: "50%" }}
                                                    priority
                                                />
                                                <div className="d-flex align-items-center ps-2 name">
                                                    <p>{comment?.user?.name}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center ps-3">
                                                <p className="comment__text">{comment?.comment_message}</p>
                                            </div>
                                        </div>
                                    ))
                                }
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
    )
}

export default SinglePost