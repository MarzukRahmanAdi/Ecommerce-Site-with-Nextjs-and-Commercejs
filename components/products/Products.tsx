import { Grid } from '@material-ui/core'
import React from 'react'
import type { NextPage } from 'next'
import Product from "./product/Product";
import useStyles from "./styles";


const products:{id: number, name:string, description:string, price:number, imgSrc: string}[] = [
    { id: 1, name: 'Viper mini', description: "a mouse for gaming" , price:10, imgSrc: "https://m.media-amazon.com/images/I/6157EeRHinL._AC_UL320_.jpg"},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price:10, imgSrc: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg" },
]

const Products:NextPage = () => {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={4} justify="center">
                {products.map(product =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products