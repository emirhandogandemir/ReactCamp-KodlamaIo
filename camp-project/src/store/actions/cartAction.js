
export const ADD_TO_CART ="ADD_TO_CART" // magic stringden kurtulmak için

export const REMOVE_FROM_CART ="REMOVE_FROM_CART"

export function addToCart(product){
return{

    type: ADD_TO_CART,// AKSİYONUN TYPEİ
    payload: product // oraya gönderdiğimiz değer

}

}

export function removeFromCart(product){
    return{
        type: REMOVE_FROM_CART,
        payload: product
    }
}

