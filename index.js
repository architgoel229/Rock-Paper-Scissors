function airock(){
    document.querySelector('.rockai').style.transform='rotatey(180deg)';
}
function aipaper(){
    document.querySelector('.paperai').style.transform='rotatey(180deg)';
}
function aiscissor(){
    document.querySelector('.scissorai').style.transform='rotatey(0deg)';
}
function reset(){
    document.querySelector('.status h2').innerHTML='';
    document.querySelector('.scissorai').style.transform='rotatey(90deg)';
    document.querySelector('.rockai').style.transform='rotatey(90deg)';
    document.querySelector('.paperai').style.transform='rotatey(90deg)';
    document.querySelector('.scissor').style.left='-375px';
    document.querySelector('.rock').style.left='-375px';
    document.querySelector('.paper').style.left='-375px';
}
function rockp(){
    document.querySelector('.rock').style.left='0px';
}
function paperp(){
    document.querySelector('.paper').style.left='0px';
}
function scissorp(){
    document.querySelector('.scissor').style.left='0px';
}
let rock='👊';
let paper='🖐';
let scissor='✌';
let ai=0;
let human=0;
let scorelog='';
let aich;
let humanch;
let gstatus;
function aichoice(){
    aino= Math.random()*3;
    if (aino>0 && aino<=1){
        airock();
        aich=rock;
    }else if(aino>1 && aino<=2){
        aipaper();
        aich=paper;
    }else{
        aiscissor();
        aich=scissor;
    }
    console.log(aich)
}
function rockclick(){
    humanch=rock;
    if (aich===rock){
        console.log('tie');
        gstatus='Tie';
    }
    else if (aich===paper){
        console.log('lose');
        gstatus='Lose';
        ai+=1;
    }
    else{
        console.log('win')
        gstatus='Win';
        human+=1;
    }
}
function paperclick(){
    humanch=paper;
    if (aich===rock){
        console.log('win');
        gstatus='Win';
        human+=1;
    }
    else if (aich===paper){
        console.log('tie');
        gstatus='Tie';
    }
    else{
        console.log('lose');
        gstatus='Lose';
        ai+=1;
    }
}
function scissorclick(){
    humanch=scissor;
    if (aich===rock){
        console.log('Lose');
        gstatus='Lose';
        ai+=1;
    }
    else if (aich===paper){
        console.log('win');
        gstatus='Win';
        human+=1;
    }
    else{
        console.log('tie');
        gstatus='Tie';
    }
}
function update(){
    let humanscore=human.toString();
    let aiscore=ai.toString();
    document.querySelector('.humanScore p').innerHTML=humanscore;
    document.querySelector('.aiScore p').innerHTML=aiscore;
    
    let log='';
    if(gstatus==='Win'){
        log='<tr><td>'+humanch+'</td><td style="color: green">'+gstatus+'</td><td>'+aich+'</td></tr>';
        document.querySelector('.status h2').innerHTML=gstatus;
        document.querySelector('.status h2').style.color='green';
        // document.querySelector('table tbody tr:first-child').style.color='green';
    }else if(gstatus==='Lose'){
        log='<tr><td>'+humanch+'</td><td style="color: red">'+gstatus+'</td><td>'+aich+'</td></tr>';
        document.querySelector('.status h2').innerHTML=gstatus;
        document.querySelector('.status h2').style.color='red';
        // document.querySelector('table tbody tr:first-child').style.color='red';
    }else{
        log='<tr><td>'+humanch+'</td><td style="color: gray">'+gstatus+'</td><td>'+aich+'</td></tr>';
        document.querySelector('.status h2').innerHTML=gstatus;
        document.querySelector('.status h2').style.color='gray';
        // document.querySelector('table tbody tr:first-child').style.color='grey';
    }
    document.querySelector('.game h2').style.fontSize='2rem';
    // let log='<tr><td>'+humanch+'</td><td>'+gstatus+'</td><td>'+aich+'</td></tr>';
    scorelog=log+scorelog;
    document.querySelector('tbody').innerHTML=scorelog;
}
function verify(){
    if(human>=5){
        document.querySelector('.buttons').innerHTML='<h1>Victory</h1>'
        document.querySelector(`.restart`).style.display='block'
        document.querySelector('.buttons').style.color='green';
        document.querySelector('.buttons h1').style.fontSize='50px';
    }else if(ai>=5){
        document.querySelector('.buttons').innerHTML='<h1>Defeat</h1>'
        document.querySelector(`.restart`).style.display='block'
        document.querySelector('.buttons').style.color='red';
        // document.querySelector('.buttons').style.color=red;
        document.querySelector('.buttons h1').style.fontSize='50px';
    }
}