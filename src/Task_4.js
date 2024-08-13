"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://jsonplaceholder.typicode.com/users';
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
function fetchingData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error("Fetching data failed");
            }
            return response.json();
        }
        catch (error) {
            console.error("Error is :", error);
        }
    });
}
fetchingData(url)
    .then(usersData => {
    console.log("User data is : ", usersData);
})
    .catch(error => {
    console.log("Error is :", error);
});
