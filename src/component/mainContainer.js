import React from 'react'
import Body from './Body/body'
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

export default function MainContainer(props) {
  return (

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Body  
           carouselImg={props.carouselImg}
           titleTrending={props.titleTrending}
           dataTrending={props.dataTrending}
           titleMoreNike={props.titleMoreNike}
           dataMoreNike={props.dataMoreNike}
           merchMenu={props.merchMenu}
        />
      </Container>
    </React.Fragment>
  )
}
