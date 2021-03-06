window.onload=function(){
  creerD();
  
}

function creerD(){

  var i=2021;
  var annee=document.getElementById("year");
  while(i>=1900){
    var chaine=document.createElement("option");
    chaine.setAttribute("value",i);
    var t=document.createTextNode(i);
    chaine.appendChild(t);
    annee.append(chaine);
    i--;
  }
  var i=1;
  var mois=document.getElementById("month");
  while(i<=12){
    var chaine=document.createElement("option");
    chaine.setAttribute("value",i);
    var t=document.createTextNode(i);
    chaine.appendChild(t);
    mois.append(chaine);
    i++;
  }
  var i=1;
  var jour=document.getElementById("day");
  while(i<=31){
    var chaine=document.createElement("option");
    chaine.setAttribute("value",i);
    var t=document.createTextNode(i);
    chaine.appendChild(t);
    jour.append(chaine);
    i++;
  }
}
function fun() {
 var mn=new Date();
 var day=mn.getDate();
 var month=mn.getMonth()+1;
 var year=mn.getFullYear();
 var demo= document.getElementById("demo");
 var jour = document.getElementsByName("day")[0].value;
 var mois = document.getElementsByName("month")[0].value;
 var annee = document.getElementsByName("year")[0].value;
 var demo1=document.getElementById("demo1");
 if(jour && mois && annee){
  var nbj1;
  switch(mois){
    case '1':case'3':
    case '5':case'7':
    case '8':case'10':
    case '12': nbj1=31;break;
    case '4':case'6':
    case '9':case'11':
    nbj1=30;break;
    case '2':{
      if(annee %4==0)
        nbj1=29;
      else nbj1=28;}
      ;
      break;
    }
    var demo2=document.getElementById("demo1");
    if((nbj1==31 && jour>=31)||(nbj1==30 && jour==31)||(nbj1==29 && jour>29)||(((year==annee)&&(mois>month))||((year==annee)&&(mois==month)&&(jour>day)))||(nbj1==28 && jour>28)){

      demo2.innerHTML="erreur";
      demo2.style.color="red";
      demo.innerHTML="";
    }
    else if( (nbj1==31 && jour<=31)||(nbj1==30 && jour<=30)||(nbj1==29 && jour<=29)||(nbj1==28 && jour<=28)){
      demo2.innerHTML="success";
      demo2.style.color="green";
      var nbj=0;
      var R=0;
      switch(month){
        case 1:case 3:case 5:case 7:case 8: case 10: case 12: nbj=31; break;

        case 4:case 6: case 9: case 11:
        nbj=30; break;
        case 2 :{ R=year%4;
          if(R==0) nbj=29;
          else 
            nbj =28;}; 
          break;

        }

        if(jour>day)
        {
          month=month-1;
          day=day+nbj;

        }
        if(mois>month)
        {
          year=year-1;
          month=month+12;

        }
        AgeJ=day-jour;
        AgeM=month-mois;
        AgeA=year-annee;
        demo.innerHTML="";
        if(AgeA){
          demo.innerHTML+=AgeA+" ann&eacute;e";
        if(AgeA!=1)
          demo.innerHTML+="s ";
        else
          demo.innerHTML+=" ";
      }
        if(AgeM)
          demo.innerHTML+=AgeM+" mois ";
        if(AgeJ){
          demo.innerHTML+=AgeJ+" jour";
        if(AgeJ!=1)
          demo.innerHTML+="s ";
        else
          demo.innerHTML+=" ";
      }

      }
    }
    else {
     demo1.innerHTML="erreur";
     demo1.style.color="red";
   }

 }