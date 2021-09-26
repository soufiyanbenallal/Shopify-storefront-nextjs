import { Box, Typography } from '@material-ui/core'
import React from 'react'
import SimpleProductCard from '../../../src/components/SimpleProductCard'

function recommendedProducts({ products }) {
    // const [variants, setvariants] = useState(products.variants.edges.map(({ node }) => node))
    return (
        <Box>
            <Typography variant="overline">Recommended For You</Typography> 
            {
                products.map(product => {
                    const variants = product.variants.edges.map(({ node }) => node)
                    return (
                    <Box mb={1} key={product.id} >
                        <SimpleProductCard product={{media:variants[0].image.src,price:variants[0].price,handle:product.handle}} />
                    </Box>
                    )
                })
            }
        </Box>
    )
}

export default recommendedProducts
