const cart = [];

const handleCart = (state = cart, action) =>{
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //check if product already exists in cart
            const exist = state.find((x)=> x.id === product.id);
            if(exist){

                //increses quantity by 1
                return state.map((x)=>
                    x.id === product.id ? {...x, qty: x.qty + 1}: x
                );
            }else{
                const product = action.paylod;
                return[
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

            case "DELITEM":
                const exist1 = state.find((x)=> x.id === product.id);
                if(exist.qty === 1){
                    return state.filter((x)=> x.id !== exist1.id);
                }else{
                    return state.map((x)=> 
                        x.id === product.id ? {...x, qty: x.qty-1} : x
                    );
                }
                break;
    
        default:
            return state;
            break;
    }

}

export default handleCart;