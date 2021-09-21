import React from 'react';
import styled from 'styled-components';
import Profile from './Profile'
import Menu from './Menu/Menu';


const Container = styled.div`
    background:${({theme})=> theme.secondary};
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    width: 16rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    flex-direction: column;
    display: flex;
    align-items: center;
`

const Sidebar = () => {
    return (
        <Container>
            <Profile/>
            <Menu />
        </Container>
    )
}

export default Sidebar
