
var tentatives=10;
var ctentatives="yo";
var trouve=false;
var gagne="Bravo vous avez gagné !!!";
var perdu="Vous avez perdu";
var pGrand="C'est plus grand";
var pPetit="C'est plus petit";
var nTentatives="";
var z=" ";




  var nombreM=  Math.floor(Math.random() * Math.floor(100));



 var p1=document.querySelector('#nbM');
 var p2=document.querySelector('#ButM');
 var p3=document.querySelector('#tentatives');
var p4=document.querySelector('#resultat');
var p5=document.querySelector('#Rejouer');
var p6=document.querySelector('#spn');


p5.disabled=true;

p2.addEventListener('click', test);
p5.addEventListener('click', reset);

function test()
{

if (tentatives >= 1){
        var saisie = parseInt(p1.value);
        if (saisie === nombreM)
        {
            trouve = true;
            p3.innerHTML = gagne;
            p3.style.backgroundColor='blue';
            p3.style.color='white';
            p3.style.fontSize='XX-large';
            p3.style.textAlign='center';
            p5.disabled=false;

        } else {
                tentatives--;
                ctentatives="Il vous reste : " + tentatives+ " Tentatives.";
                p6.innerHTML=ctentatives;
                p6.style.color='white';
                p6.style.fontSize='x-large';
                nTentatives = nTentatives+ " " + saisie;
                p4.innerHTML=nTentatives;
                p4.style.fontSize='X-large';
                p4.style.color='green';
                if (saisie < nombreM)
                {
                    p3.innerHTML = pGrand;
                    p3.style.fontSize='X-large';
                    p3.style.color='orange';
                    p3.style.backgroundColor='purple';


                } else {
                        p3.innerHTML = pPetit;
                        p3.style.fontSize='X-large';
                        p3.style.color='white';
                        p3.style.backgroundColor='#0b0b0b';

                        }
                 }
}
    else{
        p5.disabled=false;
        p3.innerHTML = perdu;
        p3.style.backgroundColor='red';
        p3.style.color='white';
        p3.style.fontSize='XX-large';
        p3.style.textAlign='center';

}
}


function reset()
{
    document.location.reload(true);
}


