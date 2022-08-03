import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';


const useStyles = makeStyles(theme => ({
    ListProductMainContainer: {
        padding: "0 40px",
        // [theme.breakpoints.down("sm")]: {
        //   padding: 0
        // }
    },
    ProductNotFound: {
        fontSize: 28,
        textAlign: 'center',
        color: '#111',
    },
    ProductLink: {
        color: "black",
        textDecoration: "none",
        cursor: 'pointer',
        fontSize: 16,
        "&:hover": {
            "& $ProductDetailColorway": {
                display: "none"
            },
            "& $ProductColorway": {
                display: "block"
            }
        }
    },
    ProductImage: {
        width: "100%",
        height: "300px",
        // [theme.breakpoints.down("xs")]: {
        //   height: "150px",
        //   width: "100%",
        // }
    },
    ProductDetailColorway: {
        lineHeight: 1.75,
        display: "block"
    },
    ProductDetail: {
        lineHeight: 1.75,
        display: "block"
    },
    ProductColorway: {
        display: "none"
    },
    ProductColorwayImage: {
        width: 36,
        height: 36
    },
    Message: {
        paddingTop: 12,
        color: "#fa5400"
    },
    ProductType: {
        color: "#757575"
    },
    Price: {
        paddingTop: 10
    }
}));
const ListProductMain = (props) => {
    const classes = useStyles()
    const navigative = useNavigate()


    const [imgURL, setimgURL] = React.useState({
        URL: ' ',
        index: null
    })
    return (
        <div>ListProductMain</div>
    )
}

export default ListProductMain