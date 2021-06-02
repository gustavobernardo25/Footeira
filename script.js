function searchTeam(){
    document.getElementById('container').innerHTML = '';
   const teamName = document.getElementById('search').value;
   fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamName}`).then(res => res.json()).then(data =>{

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
      div.setAttribute('class', 'teamInfo');
      div.setAttribute('onclick','teamSelec()');
      id.setAttribute('id', 'id');

      div.append(escudo, nome, esporte, liga, id);
      document.getElementById('container').append(div)

       }
   })

}
function teamSelec(){

}