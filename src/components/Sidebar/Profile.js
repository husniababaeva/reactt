import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    align-items: center;
    margin-top: 50px;
`

const ProfileName = styled.h1`
    color:darkcyan;
    font-size: 25px;
`

const Profile = () => {
    return (
        <Container>
            <ProfileName>okabi.net</ProfileName>
        </Container>
    )
}

export default Profile

// import React from 'react'
// import styled from 'styled-components';
// import Image from '../../assets/images/woman.jpeg';


// const Container = styled.div`
//     align-items: center;
//     margin-top: 50px;
// `
// const ProfileImg = styled.img`
//     width: 100px;
//     border-radius: 50%;
//     margin-left:5px;
// `
// const ProfileName = styled.h1`
//     color:darkcyan;
//     font-size: 15px;
//     font-weight: lighter;
// `

// const Profile = () => {
//     return (
//         <Container>
//             <ProfileImg src = {Image}/>
//             <ProfileName>Husnia Babaeva</ProfileName>
//         </Container>
//     )
// }

// export default Profile
