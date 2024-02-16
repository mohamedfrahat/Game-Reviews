export  class UI {
    
   constructor(){

      
let GamCard= document.getElementById('cardgame');
GamCard.innerHTML=``;
   }
     displayGame (result){

        let cartona = ``;
        for (let index = 0; index < result.length; index++) {
            
            cartona+=`  <div class="col" id="${result[index].id}">
            <div  class="card h-100 bg-transparent text-white" role="button"  "="">
               <div class="card-body">
                  <figure class="position-relative">
                     <img class="card-img-top object-fit-cover h-100" src=${result[index].thumbnail}>
                  
                  </figure>
            
                  <figcaption>
            
                     <div class="hstack justify-content-between">
                        <h3 class="h6 small">${result[index].title}</h3>
                        <span class="badge text-bg-primary p-2">Free</span>
                     </div>
            
                     <p class="card-text small text-center opacity-50">
                        ${result[index].short_description.split(" ", 8)}
                     </p>
            
                  </figcaption>
               </div>
            
               <footer class="card-footer small hstack justify-content-between">
            
                  <span class="badge badge-color">${result[index].genre}</span>
                  <span class="badge badge-color">${result[index].platform}</span>
            
               </footer>
            </div>
            </div>`;
    
            
        }
    
        document.getElementById('cardgame').innerHTML=cartona;
    
    }

  async displayGameditails(id)
  {
   let gameid = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`
   
   // console.log(gameid);
   const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '05396b8748msh6b32a105415f04fp1d3358jsnf5ca987eb284',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
  };

  await fetch(gameid, options).then((response) => response.json())
  .then((result) => {
    this.showgame(result);
  });

   
 
  }
  


  showgame(result){

  

//   console.log(result);

   let cartona = ``;
   
   cartona+=`<div class="container">
   <header class="hstack justify-content-between">
      <h1 class="text-center h3 py-4">Details Game</h1>
      <button class="btn-close btn-close-white" id="btnClose"></button>
   </header>
   <div class="row g-4" id="detailsContent">
<div class="col-md-4">
<img src="${result.thumbnail}" class="w-100" alt="image details">
</div>
<div class="col-md-8">
<h3>Title: ${result.title}</h3>
<p>Category: <span class="badge text-bg-info"> ${result.genre}</span> </p>
<p>Platform: <span class="badge text-bg-info"> ${result.platform}</span> </p>
<p>Status: <span class="badge text-bg-info"> ${result.status}</span> </p>
<p class="small">${result.description}</p>
<a class="btn btn-outline-warning" target="_blank" href=${result.game_url}>Show Game</a>
</div>

</div>
</div>`;

  

   document.getElementById('details').innerHTML=cartona;

   document.getElementById('home').classList.replace('d-block','d-none')
   document.getElementById('details').classList.replace('d-none','d-block')
  let close= document.getElementById('btnClose');

  close.addEventListener('click',function (){
   document.getElementById('details').classList.replace('d-block','d-none')
   document.getElementById('home').classList.replace('d-none','d-block')
  })
  }
}