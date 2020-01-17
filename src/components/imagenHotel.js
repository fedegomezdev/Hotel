import React from 'react';  //rfce
import {graphql , useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImagenFondo = styled(BackgroundImage)`
    height: 500px;
`

const TextoImagen = styled.div`
    background-image:linear-gradient( to top, rgba(34,49,63,.8),rgba(34,49,63,.8) );
    color:#FFF;
    height:100%;
    display:flex;
    flex-direction:column;
    flex:1;
    align-items:center;
    justify-content:center;

    h1 {
        font-size:4rem;
        margin: 0%;

        @media (min-width: 992px){
            font-size:5.8rem;
        }
    }
    p {
        font-size:2rem;
        @media (min-width: 992px){
            font-size:2.6rem;
        }
    }
`

function ImagenHotel() {

    const {image} = useStaticQuery(graphql`
    query {
        image:file(relativePath: {eq: "hotel.jpg" }){
          sharp:childImageSharp{
            fluid{
              srcSetWebp
            }
          }
        }
      }
      
    `)

    return (
        <ImagenFondo tag="section" fluid={image.sharp.fluid} fadeIn="soft"> 
            <TextoImagen>
                <h1>Bienvenido a Hotel Gatsby</h1>
                <p>El mejor lugar para encontrar lo que queres</p>
            </TextoImagen>
        </ImagenFondo>
    )
}

export default ImagenHotel;
