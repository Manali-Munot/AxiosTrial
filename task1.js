var axios = require('axios')["default"];
function fetchData() {
    axios.get('https://cat-fact.herokuapp.com/facts').then(function (response) {
        console.log(response);
    });
}
fetchData();
