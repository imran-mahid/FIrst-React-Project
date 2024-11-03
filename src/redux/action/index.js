// FOr adding items to cart

export const addCart = (product) =>{
    return(
        type = "ADDITEM",
        payload = product
    )
}

// for deleting from cart
export const delCart = (product) =>{
    return(
        type = "DELITEM", /*: if = does not work */
        payload = product
    )
}