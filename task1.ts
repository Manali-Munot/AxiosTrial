

function fetchData()
{
    fetch('https://cat-fact.herokuapp.com/facts')   
    .then(response => {return response.json();})   
    .then(data => 
      
      {
    console.log(data);
    });
  } 
fetchData();



