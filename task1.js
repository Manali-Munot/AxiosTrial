"use strict";
var arr;
arr = [];
function fetchData() {
    fetch('https://reqres.in/api/users')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data.data);
        for (var i = 0; i < data.data.length; i++) {
            var x = "Name : " + data.data[i].first_name + " " + data.data[i].last_name;
            arr[i] = x;
            console.log(x);
            var disp = document.querySelector("#display");
            var h4 = document.createElement('h4');
            h4.innerText = x;
            disp === null || disp === void 0 ? void 0 : disp.append(h4);
        }
        console.log(arr);
    });
}
fetchData();
