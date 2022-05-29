const allBtn = document.querySelectorAll('.btn');
const subBtn = document.getElementById('subBtn')
const ratingstate = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const rated = document.getElementById('rated');


subBtn.disabled = true 

allBtn.forEach((btn, i )=>{
    btn.addEventListener('click',()=>{
        let ratingCount = i + 1 ;
        rated.innerHTML = ` You selected ${ratingCount} out of 5`
        btn.style.backgroundColor = 'hsl(216, 12%, 54%)'
        btn.style.color = '#fff'
        if(ratingCount = 1){
            subBtn.disabled = false 
        }
        else{
            throw Error('not working')
        }
    })

});

function cssValue(){
    ratingstate.style.display = 'none'
    thankYouState.style.display = 'block'
}
subBtn.addEventListener('click',()=>{
    cssValue()
})