"use strict";
function fetchData() {
    fetch('https://cat-fact.herokuapp.com/facts')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
    });
}
fetchData();
