async function buscarPais() {
    const nome = document.getElementById("nome").value
    const capitalInput = document.getElementById("capital")
    const languageInput = document.getElementById("language")
    const continentInput = document.getElementById("continent")
    const giniInput = document.getElementById("gini")
    const bandeira = document.getElementById("bandeira")
    const brasao = document.getElementById("brasao")
    const apiUrl = `https://restcountries.com/v3.1/name/${nome}`
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()
        if (!response.ok){
            alert("País não encontrado. Por favor, verifique e tente novamente")
        } else {
            console.log(data)
            capitalInput.value = `${data[0].capital}`
            languageInput.value = `${data[0].languages[Object.keys(data[0].languages)[0]]}`
            continentInput.value = `${data[0].continents}`
            giniInput.value = `${data[0].gini[Object.keys(data[0].gini)[0]]}`
            brasao.src = `${data[0].coatOfArms[Object.keys(data[0].coatOfArms)[0]]}`
            bandeira.src = `${data[0].flags[Object.keys(data[0].flags)[0]]}`
        }
    }catch (error) {
        console.error("Erro ao buscar informações do país", error);
    }
}
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()