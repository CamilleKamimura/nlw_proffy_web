// procurar botão
document.querySelector("#add-time")
    //quando clicar no botão
    .addEventListener('click', cloneField)

//executar uma ação
function cloneField() {
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Limpar campos
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo - limpar
    fields.forEach(function (field) {
        field.value = ''
    });

    // Colocar na página
    document.querySelector('#schedule-itens').appendChild(newFieldContainer)
}
