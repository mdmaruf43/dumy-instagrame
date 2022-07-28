import React from 'react';
import { Container } from "react-bootstrap";
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';


const Home: React.FC = () => {
    return (
        <Container>
            <div className="layout__grid">
                <LeftSidebar />
                <RightSidebar />
            </div>
        </Container>
    )
}

export default Home;