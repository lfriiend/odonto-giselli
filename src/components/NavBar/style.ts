import styled from "styled-components";

export const NavMenu = styled.nav`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-inline: 100px;
padding-top: 20px;
`

export const Links = styled.ul`
width: 500px;
display: flex;
justify-content: space-between;

a {
font-weight: 600;
color: black;
position: relative;
text-decoration: none;
padding-bottom: 5px;
}
    
a::before {
content: '';
position: absolute;
width: 100%;
height: 4px;
border-radius: 4px;
background-color: #073763;
bottom: 0;
left: 0;
transform-origin: right;
transform: scaleX(0);
transition: transform .3s ease-in-out;
}

a:hover::before {
transform-origin: left;
transform: scaleX(1);
}
`