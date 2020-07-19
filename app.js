const amtavail= document.querySelector(".no");
const income = document.querySelector(".income h2"); 
const expense = document.querySelector(".expense h2"); 
const incomeval = document.querySelector(".incomeval");
const expenseval = document.querySelector(".expenseval");


//const remove = document.getElementsByClassName("rem");
const button = document.querySelector('#btn');


//})


var arr;


var lengtharr=0;

button.addEventListener('click',function(e){
    e.preventDefault();
    
    const form = document.forms['form'];
    const value = form.querySelector("input[type='number']").value;
     const description = form.querySelector("input[type='text']").value;
    //console.log(description);
    //console.log(value);
    const option = form.querySelector("#option").value;
    //console.log(option);
    if(description === ''|| value === '')
    {
        console.log("fuck off");
    }
    else{
        
        if(option === 'add' && value>0){
            const curamt = Number(amtavail.textContent);
            //ujamtavail.textContent="";
            //console.log(curamt+Number(value));
            amtavail.textContent= (curamt + Number(value)).toString(10);
            //console.log(amtavail.textContent);
            const curincm = Number(income.textContent);
            income.textContent = (curincm + Number(value)).toString(10);
            const money = document.createElement('div')
            money.classList.add('money');
            const des = document.createElement('p');
            const amt = document.createElement('h3');
            const rem = document.createElement('span');
            des.classList.add('des');
            amt.classList.add('amt');
            rem.classList.add('rem');
            des.textContent = description;
            amt.textContent = Number(value).toString(10);
            rem.textContent = 'x';
            money.appendChild(des);
            money.appendChild(amt);
            money.appendChild(rem);
            incomeval.appendChild(money);
            //remove = document.getElementsByClassName('rem');
            //console.log(remove);
           //arr =  Array.from(remove);
            
        }
        if(option === 'sub' && value>0){
            const curamt = Number(amtavail.textContent);
            //ujamtavail.textContent="";
            //console.log(curamt+Number(value));
            amtavail.textContent= (curamt - Number(value)).toString(10);
            //console.log(amtavail.textContent);
            const curexpn = Number(expense.textContent);
            expense.textContent = (curexpn + Number(value)).toString(10);
            const money1 = document.createElement('div')
            money1.classList.add('money1');
            const des1 = document.createElement('p');
            const amt1 = document.createElement('h3');
            const rem1 = document.createElement('span');
            des1.classList.add('des');
            amt1.classList.add('amt');
            rem1.classList.add('rem1');
            des1.textContent = description;
            amt1.textContent = Number(value).toString(10);
            rem1.textContent = 'x';
            money1.appendChild(des1);
            money1.appendChild(amt1);
            money1.appendChild(rem1);
            expenseval.appendChild(money1);
            //remove = document.getElementsByClassName('rem');
            //console.log(remove);
            //arr =  Array.from(remove);
        }
        //lengtharr = arr.length;
    }
})

var removeit = document.querySelector('.incomeval');

var removeits = document.querySelector('.expenseval');


removeit.addEventListener('click',function(e){
    if(e.target.className == 'rem'){
        const papa = e.target.parentElement;
        var c = papa.childNodes;
        amtavail.textContent = (Number(amtavail.textContent)-Number(c[1].textContent)).toString(10);
        income.textContent = (Number(income.textContent)-Number(c[1].textContent)).toString(10);
        removeit.removeChild(papa);

    }
})

removeits.addEventListener('click',function(e){
    if(e.target.className == 'rem1'){
        const papa1 = e.target.parentElement;
        var c1 = papa1.childNodes;
        amtavail.textContent = (Number(amtavail.textContent)+Number(c1[1].textContent)).toString(10);
        expense.textContent = (Number(expense.textContent)-Number(c1[1].textContent)).toString(10);
        removeits.removeChild(papa1);
    }
})











/*for(var i=0;i<lengtharr;i++){
    arr[i].addEventListener('click',function(e){
        const parent = e.target.parentElement;
        const grtparent = parent.parentElement;
        grtparent.removeChild(parent);
    })
}
//Array.from(remove).addEventListener('click',function(e){
  //  const parent = e.target.parentElement;
    //const grtparent = parent.parentElement;
    //grtparent.removeChild(parent);
//})

/*for(var i=0;i<remove.length;i++){
    remove[i].addEventListener('click',function(e){
        const parent = e.target.parentElement;
        const grtparent = parent.parentElement;
        grtparent.removeChild(parent);
    })
}



//Array.from(remove).forEach(function(item){
    /*item.addEventListener('click',function(e){
          //e.preventDefault();
    const parent = e.target.parentElement;
    const grtparent = parent.parentElement;
    grtparent.removeChild(parent);
    */
  // console.log(item);
 //})
//console.log(remove);
/*Array.from(remove).forEach(element => {
    element.addEventListener('click',function(e){
        //e.preventDefault();
        Array.from(remove).forEach(function(item){
      /*item.addEventListener('click',function(e){
            //e.preventDefault();
      const parent = e.target.parentElement;
      const grtparent = parent.parentElement;
      grtparent.removeChild(parent);
      */
     //console.log(item);
 //  })
   /* })
});  
*/