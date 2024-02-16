export class ActiveGame {

    constructor(){}

    setacive (category){

       let acive = Array.from(  document.querySelectorAll('.nav-link'));
       for (let index = 0; index < acive.length; index++) {
        const element = acive[index];
        element.classList.remove('acive-tap');
       }
       category.classList.add('acive-tap');
        
    }
}