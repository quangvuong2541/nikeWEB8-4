import React from 'react'
import { makeStyles } from '@mui/styles'
import { useSelector } from 'react-redux'
import { Skeleton } from '@mui/material'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  title: {
    fontSize: 24,
    marginBottom: 32
  },
  container: {
    padding: 0,
    whiteSpace: 'nowrap',
    overflowX: "hidden",
    cursor: "pointer",
    "&:hover": {
      overflowX: "scroll"
    },
    "&::-webkit-scrollbar": {
      backgroundColor: "#f5f5f5",
      height: 8,
    },
    "&::-webkit-scrollbar-track": {
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      borderRadius: 10,
      backgroundColor: "#f5f5f5",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      backgroundColor: "#757575",
    },
  },
  product: {
    width: 390,
    listStyle: "none",
    display: "inline-block",
    marginRight: 20,
    marginBottom: 40
  },
  productImage: {
    "&:hover": {
      opacity: 0.7
    },
    width: "100%",
    transition: "opacity 1s"
  },
  productDetailContainer: {
    fontSize: 16,
    display: "flex",
    marginTop: 12,
    lineHeight: 1.5,
    whiteSpace: "normal"
  },
  productDetail: {
    flex: "0 0 300px"
  },
  price: {
    flex: "1 1 auto"
  },
  productType: {
    color: "#757575"
  }

})

const ProductScroll = () => {
  //  map state to props
  const classses = useStyles()
  const data = useSelector((state) => state.reducerURL.data)
  // console.log(data);
  const isLoading = useSelector((state) => state.reducerURL.isLoading)
  // console.log(isLoading);
  const listProduct = data.slice(0, 5).map((item, key) => {
    // console.log(item._id);
    return (
      <li className={classses.product} key={key} >
        <Link to={{pathname:`/detailProduct/${item._id}`}}>
          <img className={classses.productImage} src={item.img} />
        </Link>
        <div className={classses.productDetailContainer}>
          <div className={classses.productDetail}>
            <div className={classses.productType}>{item.name}</div>
            <div className={classses.productType}>{item.message}</div>
          </div>
        </div>
        <div className={classses.price}>{item.price.toLocaleString()}VNĐ</div>
      </li>
    )
  })
  const listScrollLazyLoading = []
  for (let i = 0; i < 5; i++) {
    listScrollLazyLoading.push(
      <li className={classses.product} key={i}>
        {/* sekeleton lazzy loading của mui */}
        <Skeleton width="100%">
          <img className={classses.productImage} src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b0cccd97-5dc7-4dba-b720-ab7863109ebf/exploration-series-basketball-t-shirt-8dkWTQ.jpg" />
        </Skeleton>

        <div className={classses.productDetailContainer} >
          <div className={classses.productDetail}>
            <Skeleton width="70%"> <div className={classses.productType}>product</div></Skeleton>
            <Skeleton width="70%"> <div className={classses.productType}>product</div></Skeleton>
          </div>
          <Skeleton> <div className={classses.price}>2.000.000 đ</div></Skeleton>
        </div>
      </li >
    )
  }


  // map dispatch to props
  // useDispatch
  return (
    <div>
      <div className={classses.title}>Clean Looks, Sustainable Materials</div>
      {isLoading ?
        <ul className={classses.container}>  {listScrollLazyLoading}</ul>
        :
        <ul className={classses.container}>  {listProduct}</ul>
      }
    </div>
  )
}

export default ProductScroll