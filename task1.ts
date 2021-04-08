const axios = require('axios').default;
function fetchData()
{
    
  axios.get('https://cat-fact.herokuapp.com/facts').then(response  => {

    console.log(response);
});
  
}

fetchData();

