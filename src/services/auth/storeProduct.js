import Axios from 'axios';

export default (context,data) => {
    return Axios.post('addProduct', data).then((response) => {
        if (response && response.status === 201) {
            // eslint-disable-next-line no-console
            console.log('responseeeeee', response);
            context.products.unshift({
                name: response.data.product.name,
                price: response.data.product.price,
                quantity: response.data.product.quantity,
                newQuantity: 0
            })
        }
    }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error from prouct',error.response);
    })
}