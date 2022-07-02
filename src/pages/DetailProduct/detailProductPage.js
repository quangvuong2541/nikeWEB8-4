import React from 'react'
import { Container } from '@mui/system'
import { useParams } from 'react-router-dom'
import ProductDetail from '../../component/Product Detail/productDetail'
import { CssBaseline } from '@mui/material'

const DetailProductPage = () => {
  const { id } = useParams()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <ProductDetail id={id} />
      </Container>
    </React.Fragment>
  )
}

export default DetailProductPage