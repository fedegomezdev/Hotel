import React from "react";
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/contenidoInicio';
import HabitacionPreviews from '../components/habitacionPreviews';
import useHabitaciones from '../hooks/useHabitaciones';
import {css} from '@emotion/core';

const IndexPage = () => {

  const habitaciones = useHabitaciones();

  console.log(habitaciones)

      return(
        <Layout>
          <ImagenHotel />
          <ContenidoInicio/>

          <h2 css={css`text-align:center ; margin-top:5rem; font-size:3rem; ` }> Nuestras Habitaciones </h2>
          
          <ul>
              {habitaciones.map(habitacion =>(
                 <HabitacionPreviews/> 
              ))}

          </ul>
        </Layout>
      )
}

export default IndexPage;
