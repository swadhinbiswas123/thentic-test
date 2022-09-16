const axios = require("axios");

const create = (name, symbol)=>{

    const newData= {
        "key":"4ZfQiMNiSgtGzA1OCYr8V8T9uM62SAwS",
        "chain_id":97,
        "name":`${name}`,
        "short_name":`${symbol}`
    }
    const options = {
        method: 'POST',
        url: 'https://thentic.p.rapidapi.com/nfts/contract',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '54a71be79cmsh8ddf6266982d0e5p107a60jsn6b5a491d8e4c',
          'X-RapidAPI-Host': 'thentic.p.rapidapi.com'
        },
        data: JSON.stringify(newData)
      };
      
      axios.request(options).then(function (response) {
        const data = response.data;
        window.open(data.transaction_url);
      }).catch(function (error) {
          console.error(error);
      });
}

export default create;