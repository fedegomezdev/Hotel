import React from 'react'
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {Link}  from 'gatsby';
import Navegacion from './nav';


const EnlaceHome = styled(Link)`
    text-align:center; 
    color:#FFF;
    text-decoration:none;
`

function Header(){
    return(
        <header css={css `background-color:rgba(44,62,80); padding:1rem`}>
            <div css={css`
            max-width:1200px; 
            margin:0 auto;
            @media (min-width:768px){
                display:flex;
                align-items:center;
                justify-content:space-between;
            }
            `}>
                <EnlaceHome to='/'>
                <h1>Hotel Millen</h1>
                </EnlaceHome>

                <Navegacion/>
            </div>
        </header>
    )
}

export default Header;