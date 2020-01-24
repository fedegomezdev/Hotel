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

function Footer({title}){

    const year = new Date().getFullYear();

    return(
        <>
        <footer css={css `background-color:rgba(44,62,80); margin-top:5rem; padding:1rem`}>
            <div css={css`
            max-width:1200px; 
            margin:0 auto;
            @media (min-width:768px){
                display:flex;
                align-items:center;
                justify-content:space-between;
            }
            `}>
                <Navegacion/>

                <EnlaceHome to='/'>
                <h1>{title}</h1>
                </EnlaceHome>

                
            </div>
        </footer>
        <p css={css` background-color:rgb(33,44,55); text-align:center; color:#fff; margin:0 ; padding:1rem;`}>Hotel. Todos Los Derechos Reservados {year}$copy</p>
        </>
    )
}

export default Footer;