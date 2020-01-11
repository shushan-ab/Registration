import Axios from 'axios';

export default (data) => {
    return Axios.post('orderedProducts', data).then((response) => {
        if (response && response.status === 201) {
            // eslint-disable-next-line no-console
            console.log('response from orderedProducts',response.data.product);
        }
    }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error',error.response);
    })
}