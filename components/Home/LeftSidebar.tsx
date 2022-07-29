/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { storiesList } from "../../services/API/storiesList";
import { userPost } from "../../services/API/userPostApi";
import StroriesDataType from '../../dto/stories';
import PostDataType from '../../dto/PostDataType';
import SinglePost from '../SinglePost/SinglePost';


const LeftSidebar: React.FC = () => {
    const [story, setStory]              = useState<StroriesDataType[]>([]);
    const [allPost, setAllPost]          = useState<PostDataType[]>([]);

    useEffect(() => {
        setStory(storiesList?.data);
        setAllPost(userPost?.data?.posts);
    }, []);

    return (
        <div className="left__section" style={{ overflow: "hidden" }}>
            <div className="stroies__section" style={{ overflow: "hidden" }}>
                <Swiper
                     modules={[Navigation, Scrollbar, A11y]}
                     spaceBetween={10}
                     slidesPerView={4}
                     navigation
                     pagination={{ clickable: true }}
                     onSwiper={(swiper) => console.log(swiper)}
                     onSlideChange={() => console.log('slide change')}
                >
                    {
                        story?.map((singleStory, index) => (
                            <SwiperSlide key={index}>
                                <div className="text-center each__section">
                                    <Image
                                        src={singleStory?.photo}
                                        alt={singleStory?.name}
                                        width={100}
                                        height={100}
                                        style={{ borderRadius: "50%" }}
                                    />
                                    <p>{singleStory?.name}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            {
                allPost?.map((post, index) => (
                    <SinglePost 
                        key={index}
                        post={post}
                    />
                ))
            }
        </div>
    )
}

export default LeftSidebar