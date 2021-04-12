interface Person { 
  firstName:string, 
  lastName:string, 
  Name: string 
} 
let arr : Person[];
arr=[];

function fetchData()
{
    fetch('https://reqres.in/api/users')   
    .then(response => {return response.json();})   
    .then(data => 
     {
    console.log(data.data);

    for(let i=0;i<data.data.length;i++)
    {
          let x:Person= {
            firstName:data.data[i].first_name,
            lastName:data.data[i].last_name,
            Name :"Name : "+data.data[i].first_name +" "+ data.data[i].last_name
          }
          arr[i]=x;
          console.log(x);
          let disp=document.querySelector("#display");
          let h4 = document.createElement('h4');
          h4.innerText =x.Name;
          disp?.append(h4);
    }
    console.log(arr);
    
    });
  } 
fetchData();



