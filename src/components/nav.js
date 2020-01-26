import React from 'react';
import {Link} from 'gatsby'
import styled from '@emotion/styled';

const Nav = styled.nav`
    display:flex;
    justify-content:center;
    padding-bottom:3rem;
    @media(min-width:768px){
        padding-bottom:0;
    }
`
const NavLink = styled(Link)`
    color:#FFFFFF;
    font-size:1.6rem;
    font-weight:700;
    line-height:1rem;
    font-family:'Mono', sans-serif;
    text-decoration:none;
    padding:1rem;
    margin-right:1rem;

    &:last-of-type {
        margin-right: 0;
    }
    &.pagina-actual{
        border-bottom:2px solid #FFF;
    }
`

function Navegacion(){
    return(
        <Nav>
            <NavLink to={'/'} activeClassName="pagina-actual"> Inicioo </NavLink>
            <NavLink to={'/nosotros'} activeClassName="pagina-actual"> Nosotros </NavLink>      
        </Nav>
    )
}

export default Navegacion;