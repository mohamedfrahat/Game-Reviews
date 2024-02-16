 
import {API} from './ApiGame.js';
let ApiGame = new API();
await ApiGame.getGameData('Mmorpg');
let li = document.getElementsByTagName('li');
for (let index = 0; index < li.length; index++) {
   li[index].addEventListener('click', function (eventInfo) { 
    const category =eventInfo.target;
ApiGame.getGameData(category.innerHTML);

// ApiGame.showcard(category.innerHTML);
// ApiGame.getallgame();

})
}





// }
// document.addEventListener('click', function (eventInfo) { 
//     const category =eventInfo.target;
// ApiGame.getGameData(category.innerHTML);

// // ApiGame.showcard(category.innerHTML);
// // ApiGame.getallgame();

// })





// function displayGame (result){

//     let cartona = ``;
//     for (let index = 0; index < result.length; index++) {
        
//         cartona+=`  <div class="col">
//         <div data-id="521" class="card h-100 bg-transparent text-white" role="button" "="">
//            <div class="card-body">
//               <figure class="position-relative">
//                  <img class="card-img-top object-fit-cover h-100" src=${result[index].thumbnail}>
              
//               </figure>
        
//               <figcaption>
        
//                  <div class="hstack justify-content-between">
//                     <h3 class="h6 small">${result[index].title}</h3>
//                     <span class="badge text-bg-primary p-2">Free</span>
//                  </div>
        
//                  <p class="card-text small text-center opacity-50">
//                     ${result[index].short_description.split(" ", 8)}
//                  </p>
        
//               </figcaption>
//            </div>
        
//            <footer class="card-footer small hstack justify-content-between">
        
//               <span class="badge badge-color">${result[index].genre}</span>
//               <span class="badge badge-color">${result[index].platform}</span>
        
//            </footer>
//         </div>
//         </div>`;

        
//     }

//     GamCard.innerHTML=cartona;

// }

// async function getGameData(category)
// {
//     const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '05396b8748msh6b32a105415f04fp1d3358jsnf5ca987eb284',
// 		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
// 	}
// };

// // console.log(category);
// 	const response = await fetch(url, options);
//     if(response.ok)
//     {
//         const result = await response.json();
//         gameCategory.displayGame(result);
//         // displayGame(result);
//     }
//     else{
//         console.log('there is error with data');
//     }




// }