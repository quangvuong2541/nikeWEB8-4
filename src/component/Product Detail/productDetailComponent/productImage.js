import { Card, CardActionArea, CardMedia, Container, Grid, Hidden, Skeleton } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { maxWidth } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    ProductContainer: {
        padding: "0 44px",
        fontSize: 16,
        lineHeight: 1.7
    },
    ProductImage: {
        width: "100%"
    },
    image: {
        maxHeight: "100%",
        maxWidth: "100%"

    },
}))

const ProductImage = ({ detailProduct, index }) => {
    const classes = useStyles();
    const isLoading = useSelector((state) => state.reducerURL.isLoading)
    var listLazyLoad = []
    // console.log(detailProduct.imgDetails.);
    for (let i = 0; i < 6; i++) {
        listLazyLoad.push(
            <Grid item xs={6} key={i}>
                <Skeleton animation="wave">
                    <img className={classes.ProductImage} 
                    src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e0c08734-caa0-4021-97ec-90b6945dfadb/air-force-1-shadow-shoe-klCJXd.jpg" />
                </Skeleton>
            </Grid>
        )
    }
    return (
        <div>
            <Hidden smDown>
                {isLoading ?
                    <Grid container className={classes.ProductContainer} spacing={2}>
                        {listLazyLoad}
                    </Grid>
                    :
                    <Grid container className={classes.ProductContainer} spacing={2}>
                        {detailProduct.imgDetails[index].imgs.map((item, key) => {
                            return (
                                <Grid key={key} item xs={6}>
                                    <img className={classes.ProductImage} src={item.img} />
                                </Grid>
                            )
                        })}
                    </Grid>
                }
            </Hidden>
            <Hidden mdUp>
                <Container maxWidth='xl'>
                    {detailProduct.imgDetails[index].imgs.map((item, index) => {
                        return (
                            <Card className={classes.image} key={index}>
                                {isLoading ?
                                    <Skeleton>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                className={item.img}
                                                image={item.img}
                                                title="Contemplative Reptile"
                                            />
                                        </CardActionArea>
                                    </Skeleton>
                                    :
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            className={item.img}
                                            image={item.img}
                                            title="Contemplative Reptile"
                                        />
                                    </CardActionArea>
                                }
                            </Card>
                        )
                    })}
                </Container>
            </Hidden>
        </div>
    )
}

export default ProductImage