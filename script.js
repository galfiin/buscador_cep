// toda api vai usar essas chamadas. "get, post, put, delete."
// get = pega informações
// post = enviar info
// put = enviar info e ela vai atualizar lá dentro
// delete = vai enviar uma info pra deletar a info.

function buscar_cep(){
     const numero_cep = document.getElementById("number_cep").value // .value = buscar valor do input
     if(!numero_cep) {
        alert("Isto não é um Cep")
        return
     } 
    const url_cep = `https://viacep.com.br/ws/${numero_cep}/json`
    fetch(url_cep) //fetch faz qualquer requição
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Este cep não é valido", response.data)
            } 
            return response.json()
        })
        .then(function (data) {
            mostrarTela(data)
        })
        .catch (function (Error){
            console.error("Erro na requisição: ", Error)
        })
} 
function mostrarTela(data) {
    const info_div = document.getElementById("info_cep")
    var html = "<p><strong>CEP:</strong> " + data.cep + "</p>" +
             "<p><strong>Logradouro:</strong> " + data.logradouro + "</p>" +
             "<p><strong>Complemento:</strong> " + data.complemento + "</p>" +
             "<p><strong>Bairro:</strong> " + data.bairro + "</p>" +
             "<p><strong>Localidade:</strong> " + data.localidade + "</p>"+
             "<p><strong>UF:</strong> " + data.uf + "</p>";
    info_div.innerHTML = html 
}