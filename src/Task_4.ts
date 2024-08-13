const url = 'https://jsonplaceholder.typicode.com/users' as string;

//  function fetchingData(url : string) : Promise<void>{
//     fetch(url)
//       .then(response => {
//         if(!response.ok){
//             throw new Error("Fetching data failed")
//         }
//         return response.json()
//         })
//       .then(usersData => {
//         console.log("User data is : ", usersData)
//       })
//       .catch(error => {
//         console.log("Error is :", error);
//       })
      
// }

async function fetchingData(url : string) : Promise<void>{
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Fetching data failed")
        }
        return response.json();
    }catch(error) {
        console.error("Error is :", error);
    }
}

fetchingData(url)
    .then(usersData => {
      console.log("User data is : ", usersData)
    })
    .catch(error => {
      console.log("Error is :", error);
    })