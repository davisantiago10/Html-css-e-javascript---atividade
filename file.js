function validarCadastroAluno() {
    let resposta = confirm("Deseja realmente salvar os dados desse aluno?");

    if (resposta) {
        alert("Estudante salvo com sucesso!");
    } else {
        alert("Cadastro cancelado.");
    }
}

function validarCadastroDisciplina() {
    let resposta = confirm("Deseja realmente salvar os dados dessa disciplina?");

    if (resposta) {
        alert("Disciplina salvo com sucesso!");
    } else {
        alert("Cadastro cancelado.");
    }
}

function avaliarMeta() {
    let horas = parseInt(prompt("Quantas horas por semana você pretende dedicar às disciplinas?"));

    if (horas >= 10) {
        alert("Excelente meta! Você terá um ótimo rendimento.");
    } else {
        alert("Cuidado! Pode ser necessário dedicar mais tempo aos estudos.");
    }
}
