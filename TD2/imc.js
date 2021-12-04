function calcule()
{
    var poid=document.getElementById("p").value;
    var taille=document.getElementById("t").value;
    var imc=poid/(Math.pow(taille,2));
    console.log("indice: ",imc);
    imc=Math.round(imc);
    document.getElementById("result").innerHTML="l'indice de masse corporelle est: "+imc;
interp(imc);
}
function interp(masse)
{
    var space=document.getElementById("interpretation");
    if(masse<20)
    {
        space.innerHTML="<span class='badge bg-warning'>vous êtes maigre</span>";
    }
    else if(masse<=25)
    {
        space.innerHTML="<span class='badge bg-success'>vous êtes idéale</span>";
    }
    else
    {
        space.innerHTML="<span class='badge bg-danger'>vous êtes en surpoid</span>";
    }


}