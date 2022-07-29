import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { userData } from "../../services/API/logInUser";
import { onlineUserList } from "../../services/API/onlineUserList";
import OnlineUserDataType from '../../dto/OnlineUser';

const RightSidebar: React.FC = () => {
    const [onlineUser, setOnlineUser]   = useState<OnlineUserDataType[]>([]);

    useEffect(() => {
        setOnlineUser(onlineUserList?.data);
    }, []);

    return (
        <div className="right__section">
            <div className="profile__layout d-flex justify-content-between">
                <div className="d-flex">
                    <Image
                        src={userData?.photo}
                        alt={userData?.name}
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
                {
                    onlineUser?.length 
                        ? (
                            onlineUser?.map((user, index) => (
                                <div key={index} className="profile__layout d-flex justify-content-between">
                                    <div className="d-flex">
                                        <Image
                                            src={user?.photo}
                                            alt="user photo"
                                            width={60}
                                            height={60}
                                            style={{ borderRadius: "50%" }}
                                            priority
                                        />
                                        <div className="d-flex align-items-center ps-2">
                                            <div>
                                                <p className="user__name">{user?.name}</p>
                                                <p>Followed by {user?.follow_by}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="switch__text">Follow</p>
                                    </div>
                                </div>
                            ))
                        ) : null
                }
                
            </div>
        </div>
    )
}

export default RightSidebar