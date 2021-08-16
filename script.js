// ESTE SERIA O CONTEÚDO DO .js
var json_cidades = {
  "estados": [
    {
      "sigla": "AL",
      "nome": "ALAGOAS",
      "cidades": [
        "MACEIO"
      ]
    },
    {
      "sigla": "AM",
      "nome": "AMAZONAS",
      "cidades": [
        "MANAUS"  
      ]
    },
    {
      "sigla": "BA",
      "nome": "BAHIA",
      "cidades": [
        "ALAGOINHAS",
        "FEIRA DE SANTANA",
        "SALVADOR"
         
      ]
    },
    {
      "sigla": "CE",
      "nome": "CEARA",
      "cidades": [
        "FORTALEZA"                 
      ]
    },
    {
      "sigla": "DF",
      "nome": "DISTRITO FEDERAL",
      "cidades": [
        "BRASILIA"
       ]
    },
    {
      "sigla": "GO",
      "nome": "GOIÁS",
      "cidades": [
        "GOIANIA",
        "SENADOR CANEDO"         
      ]
    },
    {
      "sigla": "MA",
      "nome": "MARANHÃO",
      "cidades": [
        "SÃO LUIS"   
      ]
    },
     {
      "sigla": "MG",
      "nome": "MINAS GERAIS",
      "cidades": [
        "BELO HORIZONTE",
        "IPATINGA",
        "JUIZ DE FORA",
        "UBERLANDIA"   
      ]
    },
    {
      "sigla": "MS",
      "nome": "MATO GROSSO DO SUL",
      "cidades": [
        "TRÊS LAGOAS"  
      ]
    },
    {
      "sigla": "PA",
      "nome": "PARA",
      "cidades": [
        "BELÉM"
      ]
    },
    {
      "sigla": "PB",
      "nome": "PARAIBA",
      "cidades": [
        "CAMPINA GRANDE",
        "JOÃO PESSOA"
      ]
    },
    {
      "sigla": "PE",
      "nome": "PERNANBUCO",
      "cidades": [
        "IPOJUCA",
        "JABOATÃO DOS GUARARAPES",
        "RECIFE"
      ]
    },
    {
      "sigla": "PR",
      "nome": "PARANA",
      "cidades": [
        "CURITIBA",
        "LONDRINA"
      ]
    },
    {
      "sigla": "RJ",
     "nome": "RIO DE JANEIRO",
     "cidades": [
      "ANDRA DOS REIS",
      "DUQUE DE CAXIAS",
      "ITABORAÍ",
      "NITERÓI",
      "NOVA IGUAÇU",
      "RIO DE JANEIRO",
      "SÃO GONÇALO",
      "SEROPÉDICA"
        ]
    },
    {
        "sigla": "RN",
        "nome": "RIO GRANDE DO NORTE",
        "cidades": [
        "MOSSORÓ",
        "NATAL"
        ]
    },
    {
      "sigla": "SC",
      "nome": "SANTA CATARINA",
      "cidades": [
      "FLORIANÓPOLIS",
      "ITAJAÍ"
        ]
    },
    {
      "sigla": "RS",
      "nome": "RIO GRANDE DO SUL",
     "cidades": [
     "PELOTAS",
     "PORTO ALEGRE",
     "RIO GRANDE"
        ]
    },
    {
        "sigla": "SE",
        "nome": "SERGIPE",
        "cidades": [
        "ARACAJU",
        ]
    }
  ]
};
// FIM DO .js

function buscaCidades(e){
   document.querySelector("#cidade").innerHTML = '';
   var cidade_select = document.querySelector("#cidade");

   var num_estados = json_cidades.estados.length;
   var j_index = -1;

   // aqui eu pego o index do Estado dentro do JSON
   for(var x=0;x<num_estados;x++){
      if(json_cidades.estados[x].sigla == e){
         j_index = x;
      }
   }

   if(j_index != -1){
  
      // aqui eu percorro todas as cidades e crio os OPTIONS
      json_cidades.estados[j_index].cidades.forEach(function(cidade){
         var cid_opts = document.createElement('option');
         cid_opts.setAttribute('value',cidade)
         cid_opts.innerHTML = cidade;
         cidade_select.appendChild(cid_opts);
      });
   }else{
      document.querySelector("#cidade").innerHTML = '';
   }
}

  document.getElementById('info-add').addEventListener('mousedown', function() {
   var display = document.getElementById('info-add-div').style.display;
   
   if (display == "none") {
    document.getElementById('info-add-div').style.display = 'flex';
   
  }else{
    document.getElementById('info-add-div').style.display = 'none';
    
  }

    });
