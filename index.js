'use strict';
const RULES=document.querySelector('.rules');
const point=document.querySelector('.points');
const newgame=document.querySelector('.newgame');
const begin=document.querySelector('.begin');
const blur2=document.querySelector('.blur2');
const blur1=document.querySelector('.blur1');
const roll=document.querySelector('.rollbutton');
const click=document.querySelector('.click');
const firstname=document.querySelector('.one');
const secondname=document.querySelector('.two');
const name1=document.querySelector('.player1name');
const name2=document.querySelector('.player2name');
const dice=document.querySelector('.dice');
const hold=document.querySelector('.holdbutton');
let rule=document.querySelector('.rule');
let score1=document.querySelector('.score1');
let player1=document.querySelector('.player1');
let player2=document.querySelector('.player2');
let score2=document.querySelector('.score2');
let tscore1=document.querySelector('.tscore1');
let tscore2=document.querySelector('.tscore2');
let detail=document.querySelector('.details');
let gameplay=document.querySelector('.gameplay');
let game=document.querySelector('.game');
let current_player=1;
let current_score=0;
let total_score=0;

color(1);
function color(current)
{
    if(current===1)
    {
        player1.classList.add('currentpl');
        player2.classList.remove('currentpl');
    }
    else{
        player2.classList.add('currentpl');
        player1.classList.remove('currentpl');
    }
}
RULES.addEventListener('click',function()
{
   
    if( rule.classList.contains('rule2'))
    {
        rule.classList.remove('rule2');
        point.classList.remove('points2');
    }
    else{
        rule.classList.add('rule2');
        
        setTimeout(function()
        {
        point.classList.add('points2');
        },500);
    }
    if( blur1.classList.contains('blur'))
    blur1.classList.remove('blur');
    else
    blur1.classList.add('blur');
});

newgame.addEventListener('click',function()
{
    rule.classList.remove('rule2');
    blur1.classList.remove('blur');
    point.classList.remove('points2');
    let detail=document.querySelector('.details');
    blur2.classList.add('blur');
    firstname.textContent=`player 1`;
    secondname.textContent=`player 2`;
    name1.value=``;
    name2.value=``;
    tscore1.textContent=`0`;   
    tscore2.textContent=`0`;   
    score1.textContent=`0`;   
    score2.textContent=`0`;   
    if( detail.classList.contains('details2')){
        detail.classList.remove('details2')
        blur2.classList.remove('blur');
    }
    else{
        detail.classList.add('details2')
    }
    player1.classList.remove('winner','loser','loser1','winner1');
    player2.classList.remove('winner','loser','loser1','winner1');
    firstname.classList.remove('win','loose');
    secondname.classList.remove('loose','win');

});

roll.addEventListener('click',function(){
    const number=Math.trunc(Math.random()*6)+1;
    dice.classList.remove('hidden');
    dice.src=`DICE-${number}.png`;
    
    if(number===1)
    {
        if(current_player===1)
        {
        score1.textContent=`0`;
        current_score=0;
        current_player=2;
            color(current_player);
        }
        else{
            current_score=0;
            score2.textContent=`0`;
            current_player=1;
            color(current_player);
        }
    }
    else{
        current_score+=number
        if(current_player===1)
        {
        score1.textContent=current_score;
    }
        else
        score2.textContent=current_score;

    }
});


begin.addEventListener('click',function(){
    if( detail.classList.contains('details2')){
        blur2.classList.remove('blur');
        detail.classList.remove('details2')
    }
    if( name1.value!='')
    {
        firstname.textContent=name1.value;

    }
    else{
    firstname.textContent='PLAYER 1'
    } 
    if(name2.value!='')
    {
        secondname.textContent=name2.value;

    }
    else{
        secondname.textContent='PLAYER 2'
    }
    gameplay.classList.remove('hidden');
});

hold.addEventListener('click',function(){
    dice.classList.add('hidden');

    if(current_player===1)
    {
        tscore1.textContent=current_score+Number(tscore1.textContent);
        
        current_score=0;
        if((Number(tscore1.textContent))>=100)
        {
            firstname.textContent=`WINNER`;
            player1.classList.add('winner');
            player2.classList.add('loser');
            firstname.classList.add('win');
            secondname.classList.add('loose');
            secondname.textContent=`LOSER`;
            gameplay.classList.add('hidden');

        }
        score1.textContent=`0`;
        current_player=2;
        color(current_player);
    }
    else{
        tscore2.textContent=current_score+Number(tscore2.textContent);
        
        current_score=0;
        if((Number(tscore2.textContent))>=100)
        {
            secondname.textContent=`WINNER`;
            player2.classList.add('winner1');
            player1.classList.add('loser1');
            secondname.classList.add('win');
            firstname.classList.add('loose');
            gameplay.classList.add('hidden');
            firstname.textContent=`LOSER`;
        }
        score2.textContent=`0`;
        current_player=1;
        color(current_player);
    }
});