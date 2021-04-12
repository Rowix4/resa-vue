export default function yelpAuthHeader() {
    let apiKey = 'pUe4rqZLiOzxpem4WleKtiqGHxE73a84SD5_8_CoOQk8HM9nyE-BQbI_9UCMEGgAVdBOyTmwqVqxrLOBAKY4C5FZbjPsGEp-ygqQ-QXduoq8qdW45b0MkpGo2EJbYHYx';

    return {
        'accept': 'application/json',
        'x-requested-with': 'xmlhttprequest',
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + apiKey,
    };
}