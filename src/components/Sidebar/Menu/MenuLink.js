import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    border-left: 3px solid ${props => props.active ? props.theme.activeMenu : "transparent"} ;
    width: 100%;
    padding: 5px;
    padding-left: 50px;
    cursor: pointer;
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    transition: 0.4s all ease-in-out;

    &:hover{
        background-color: darkgrey;

    }
`
const Icon = styled.span`
 color: ${props => !props.active && props.theme.textColor};
    font-size: 1rem;
    margin-right: 1rem;

`
const Title = styled.h1`
    font-size: 0.9rem;
    font-weight: 300;
    color: ${props => props.active ? props.theme.activeMenu : "#AAA5A5"};
`

const MenuLink = ({ title, active, icon }) => {
    return (
        <Container active={active}>
            <Icon active={active} className="iconify" data-inline="false" data-icon={`mdi-light:${icon}`}></Icon>
            <Title active={active}>{title}</Title>
        </Container>
    )
}

export default MenuLink
