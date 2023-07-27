console.log("tip calculator");
let tip=0;

window.onload=()=>{
    const btn=document.querySelector("#calculate");
    const tips=document.querySelectorAll('.tip');
    document.querySelector('#reset').onclick=resetvalues;
    tips.forEach(tip=>{
        tip.addEventListener('click',handleTipClick);
    })
    btn.addEventListener('click',()=>{
       const amount= Number(document.querySelector('#amount').value);
       const people=Number(document.querySelector('#people').value);
        if(!amount && !people){
            alert("please enter the values");
            return;
        }
        const Tip=(amount*tip)/100;
        const billperperson=(amount+Tip)/people;
        document.querySelector("#tipamount").textContent=Tip/people;
        document.querySelector("#totalamount").textContent=billperperson;
    })
}
function handleTipClick(e){
    tip=e.target.textContent.split('%')[0];
}
function resetvalues(){
    document.querySelector("#tipamount").textContent=0;
    document.querySelector("#totalamount").textContent=0; 
}