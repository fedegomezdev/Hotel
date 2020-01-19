import React from 'react';
import {graphql , useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import {css} from '@emotion/core';


const TextoInicio = styled.div`
    padding-top:4rem;
    margin:0 auto;
    width:95% ;
    max-width: 1200px;

    @media (min-width :768px){
        display:grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
    }
    p {
        line-height: 2;
    }
`


function ContenidoInicio() {

    const informacion = useStaticQuery(graphql`
    query{
        allDatoCmsPagina( filter: {slug: {eq:"inicio"} } ) {
          nodes {
            titulo
            contenido
            imagen{
              fluid{
                ...GatsbyDatoCmsFluid 
              }
            }
          }
        }
        }
    `)
        //el gatsbydatocmsfluid , es una opcion que nos da el source para traer la imagen mas optimizada, no todos los tienenw

        const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0] ;

    return (
        <>
            <h2
            css={css `text-align:center; font-size:4rem; margin-top:4rem` }> {titulo} </h2>

            <TextoInicio>
            <p>{contenido}</p>
            <Image fluid={imagen.fluid}/>
            </TextoInicio>
        </>
    )
}

export default ContenidoInicio;


