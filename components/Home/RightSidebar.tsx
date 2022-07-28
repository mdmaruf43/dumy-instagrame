import React from 'react';
import Image from 'next/image';

const RightSidebar = () => {
    return (
        <div className="right__section">
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
                            <p className="user__name">kathe43</p>
                            <p>Kathy Morgan</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <p className="switch__text">Switch</p>
                </div>
            </div>
            <div className="suggestion">
                <div className="header d-flex justify-content-between">
                    <p>Suggestions For You</p>
                    <p><a href="#">See All</a></p>
                </div>
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
            </div>
        </div>
    )
}

export default RightSidebar