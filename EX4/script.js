function Salvar() {
    localStorage.setItem("nome",document.getElementById("nome").value);
    localStorage.setItem("cor",document.getElementById("cor").value);
    localStorage.setItem("idade",document.getElementById("idade").value);
    localStorage.setItem("cidade",document.getElementById("cidade").value);    
}

function includeNome() {
    document.getElementById("nomeh").innerHTML = localStorage.getItem("nome")
    document.getElementById("nome").value = localStorage.getItem("nome")
}

function includeIdade() {
    document.getElementById("idadeh").innerHTML = localStorage.getItem("idade")
    document.getElementById("idade").value = localStorage.getItem("idade")
}

function includeCor() {
    document.body.style.backgroundColor = localStorage.getItem("cor")
    document.getElementById("cor").value = localStorage.getItem("cor")
}

function includeCidade() {
    document.getElementById("cidadeh").innerHTML = localStorage.getItem("cidade")
    document.getElementById("cidade").value = localStorage.getItem("cidade")
}

window.onload = function() {
    
    let naoPreenchido = false;
    if (localStorage.getItem("nome") ?  includeNome() : naoPreenchido = true );
    if (localStorage.getItem("cor") ? includeCor() : naoPreenchido = true );    
    if (localStorage.getItem("idade") ? includeIdade() : naoPreenchido = true );
    if (localStorage.getItem("cidade") ? includeCidade() : naoPreenchido = true );    

    if (naoPreenchido)
        document.getElementById("naoPreenchido").style.display ='block';
};