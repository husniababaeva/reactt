import React from 'react';
import styled from 'styled-components';
import MenuLink from './MenuLink';

const Container = styled.div`
    margin-top: 45px;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Ana sehife" icon={'home'} active/>
            <MenuLink title="Profil" icon={'file-multiple'}  />
            <MenuLink title="Hesabim" icon={'gift'} />
            <MenuLink title="Statistika" icon={'bank'} />
            <MenuLink title="Telebeler" icon={'cog'} />
        </Container>
    )
}

export default Menu
