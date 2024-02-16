import {UI} from './UI.js';
import {ActiveGame} from './Acivegame.js';
let gameCategory = new UI();
let active  = new ActiveGame();

export class API {

    constructor(){

      

        document.addEventListener('click', function (eventInfo) {
            const category =eventInfo.target;
            active.setacive(category);

            // this.showcard();
          
        })

        
    
        
    }

    async  getGameData(category)
    {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '05396b8748msh6b32a105415f04fp1d3358jsnf5ca987eb284',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    // console.log(category);
        const response = await fetch(url, options);
        if(response.ok)
        {
            const result = await response.json();
            // console.log(result);
            gameCategory.displayGame(result);
        
            this.showcard();
        }
        else{
            console.log('there is error with data');
           
        }
    
    
    
    
    }
    

async    showcard(){
    let allgamecard ='';
         allgamecard=  Array.from(document.querySelectorAll('.col'))
       
        //   console.log(allgamecard);
          for (let index = 0; index < allgamecard.length; index++) {
           allgamecard[index].addEventListener('click', function(eventInfo)
           {
        
        
            gameCategory.displayGameditails(this.id);
          
            
           
    //   return gameid;
             
           })
        
        //    let gameid = `https://www.freetogame.com/api/game?id=${this.id}`




       }
      }

}