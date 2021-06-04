function searchTeam(){
    document.getElementById('container').innerHTML = '';
   const teamName = document.getElementById('search').value;
   fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamName}`).then(res => res.json()).then(data =>{
console.log(data)
       for (item of data.teams){
           console.log(item)
           var nome = document.createElement('p');
           var liga = document.createElement('p');
           var esporte = document.createElement('p');
           var escudo = document.createElement('img');
           var id = document.createElement('p');

           nome.append(item.strTeam);
           liga.append(item.strLeague);
           esporte.append(item.strSport);
           escudo.setAttribute('src', item.strTeamBadge);
           id.append(item.idTeam);


      const div = document.createElement('div');
      div.setAttribute('class', 'Content1');
      div.setAttribute('onclick','teamSelec()');
     

      div.append(escudo, nome, esporte, liga, id);
      document.getElementById('container').append(div)

    }
})

}

function teamSelec(){
    const idDoTime = document.getElementById('container').firstChild.lastChild.innerText
    console.log(idDoTime)
    document.getElementById('container').innerHTML = '';

    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idDoTime}`).then(res => res.json()).then(data =>{
        
        for (item of data.teams){
        console.log(item)
        var nome = document.createElement('p');
        var liga = document.createElement('p');
        var esporte = document.createElement('p');
        var dsctime = document.createElement('p');
        var estadio = document.createElement('p');
        var imgestadio = document.createElement('img')
        var dscestadio = document.createElement('p');
        var capacidade = document.createElement('p');
        var cidade = document.createElement('p');
        var pais = document.createElement('p')
        var escudo = document.createElement('img');
        var id = document.createElement('p');
        var img1 = document.createElement('img');
        var img2 = document.createElement('img');
        var link = document.createElement('a');
        
        nome.append(item.strTeam);
        liga.append(item.strLeague);
        esporte.append(item.strSport);
        dsctime.append(item.strDescriptionEN);
        estadio.append(item.str);
        imgestadio.setAttribute('src',item.strStadiumThumb);
        capacidade.append(item.intStadiumCapacity);
        pais.append(item.strCountry);
        cidade.append(item.strStadiumLocation);
        dscestadio.append(item.strStadiumDescription);
        escudo.setAttribute('src', item.strTeamBadge);
        img1.setAttribute('src',item.strTeamJersey)
        img2.setAttribute('src',item.strTeamLogo)
        id.append(item.idTeam);
        link.setAttribute('src','https://' + item.strYoutube);
        link.append('https://' + item.strYoutube);


        const div = document.createElement('div');
        div.setAttribute('class','Content2')
        div.append(escudo, nome, esporte, liga, id,dsctime,imgestadio,dscestadio,capacidade,cidade,pais,img1,img2,link);
        document.getElementById('container').append(div)
        }
    })

    
}