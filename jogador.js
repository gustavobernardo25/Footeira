function searchPlayer() {
    document.getElementById('container').innerHTML = '';
    const playerName = document.getElementById('search').value;
    fetch(` https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${playerName}`).then(res => res.json()).then(data => {
        console.log(data)

        for (item of data.player){
            console.log(item)
            var nome = document.createElement('p');
            var time = document.createElement('p');
            var fotoJogador = document.createElement('img');
            var idJogador = document.createElement('p');

            nome.append(item.strPlayer);
            time.append(item.strTeam);
            fotoJogador.setAttribute('src', item.strCutout);
            idJogador.append(item.idPlayer);


            const div = document.createElement('div');
            div.setAttribute('class', 'Content1');
            div.setAttribute('onclick', 'playerSelec()');


            div.append(fotoJogador, nome, time, idJogador);
            document.getElementById('container').append(div)

        }
    })

}

function playerSelec() {
    const idJogador = document.getElementById('container').firstChild.lastChild.innerText
    document.getElementById('container').innerHTML = '';


fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${idJogador}`).then(res => res.json()).then(data => {
console.log(data)
        for (item of data.players) {
            console.log(item)
            var nome = document.createElement('p');
            var fotoJogador = document.createElement('img');
            var img1 = document.createElement('img');
            var img2 = document.createElement('img');
            var linkInsta = document.createElement('a');
            var linkFace = document.createElement('a');
            var linkTwitter = document.createElement('a');
            var altura = document.createElement('p');
            var peso = document.createElement('p');
            var posicao = document.createElement('p');
            var dscJogador = document.createElement('p');
            var local = document.createElement('p');
            var data = document.createElement('p');
            var nacionalidade = document.createElement('p');
            var time = document.createElement('p');


            nome.append(item.strPlayer);
            fotoJogador.setAttribute('src', item.strCutout);
            img1.setAttribute('src', item.strThumb)
            img2.setAttribute('src', item.strRender)
            linkInsta.setAttribute('src', 'https://' + item.strInstagram);
            linkInsta.append('https://' + item.strInstagram);
            linkFace.setAttribute('src', 'https://' + item.strFacebook);
            linkFace.append('https://' + item.strFacebook);
            linkTwitter.setAttribute('src', 'https://' + item.strTwitter);
            linkTwitter.append('https://' + item.strTwitter);
            altura.append(item.strHeight);
            peso.append(item.strWeight);
            posicao.append(item.strPosition);
            dscJogador.append(item.strDescriptionEN);
            local.append(item.strBirthLocation);
            data.append(item.dateBorn);
            nacionalidade.append(item.strNationality);
            time.append(item.strTeam);



            const div = document.createElement('div');
            div.setAttribute('class', 'Content2')
            div.append(nome, fotoJogador, img1, img2, linkInsta, linkFace, linkTwitter, altura, peso, posicao, dscJogador, local, data, nacionalidade, time);
            document.getElementById('container').append(div)
        }
    })
}
