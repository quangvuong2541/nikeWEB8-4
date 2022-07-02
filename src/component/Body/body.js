import React from 'react'
import Carousel from './BodyComponent/carousel';
import { makeStyles } from '@mui/styles';
import Trending from './BodyComponent/trending';
import MoreNike from './BodyComponent/moreNike';
import ProductScroll from './BodyComponent/productScroll';

const useStyles = makeStyles({
  body: {
    padding: '0 44px 50px',
  },
  bodyComponents: {
    marginTop: 84
  }
})

export default function Body(props) {
  const classes = useStyles()
  return (

    <div className={classes.body}>
      {/* carousel */}
      <div className={classes.bodyComponents}>
        <Carousel carouselImg={props.carouselImg} />
      </div>
      {/* Trending */}
      <div className={classes.bodyComponents}>
        <Trending dataTrending={props.dataTrending} titleTrending={props.titleTrending} />
      </div>
      {/* product scroll */}
      <div className={classes.bodyComponents}>
        <ProductScroll />
      </div>
      {/* More nike */}
      <div className={classes.bodyComponents}>
        <MoreNike titleMoreNike={props.titleMoreNike}
          dataMoreNike={props.dataMoreNike} />
      </div>

    </div>
  )
}
