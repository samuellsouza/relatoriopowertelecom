let atividade = [
	{
		"demanda" : "Troca do Switch | POP_Cavunge",
        "cidade" : "Cavunge - Ipecaetá",
		"atividade" : [
			"Substituição do switch principal do Backbone", 
			"Configuração de rede e testes de conectividade",
            "Ativação do circuito de 10Gb | Santo Estêvão até Cavunge - Ipecaetá",
            "Foi Instalado Switch Raisecom Modelo: RAX711-R-4GC-AC/S"
		],
		"agendamento" : "16/07/2025",
		"equipe" : "Jobson, Raudinei",
		"observacao" : "A manutenção será realizada depois das 01h00 do dia 17/07/2025.",
        "concluido" : "Sim"
	},

    {
		"demanda" : "Instalação do Novo servidor TR-O69",
        "cidade" : "",
		"atividade" : [
			"Fazer instação Física",
			"Instalação do programa de virtualização",
            "",
            ""
		],
		"agendamento" : "17/07/2025",
		"equipe" : "Samuel, Jobson",
		"observacao" : "sem informações",
        "concluido" : "Não"
	},

    {
		"demanda" : "Projeto Rosarinho",
        "cidade" : "Rosarinho - Rafael Jambeiro",
		"atividade" : [
			"Fazer levantamento de um novo enlance",
			"Projeto FTTH",
            "Lavantemento de custo geral",
            ""
		],
		"agendamento" : "11/07/2025",
		"equipe" : "Jobson, Paulo José",
		"observacao" : "EM ANDAMENTO",
        "concluido" : "Não"
	},
    
    {
		"demanda" : "Melhorias na energia de Feira de Santana",
        "cidade" : "Feira de Santana",
		"atividade" : [
			"Fazer orcamento de novos equipamentos para melhorar a autonomia",
			"",
            "",
            ""
		],
		"agendamento" : "15/07/2025",
		"equipe" : "Samuel, Jobson",
		"observacao" : "EM ANDAMENTO",
        "concluido" : "Não"
	},

    {
		"demanda" : "Trocar o provedor nossa linha digital",
        "cidade" : "",
		"atividade" : [
			"Reduzir os custo com telefonia",
			"Aguardado retorno das empresa com orcamento",
            "",
            ""
		],
		"agendamento" : "15/07/2025",
		"equipe" : "Samuel",
		"observacao" : "EM ANDAMENTO",
        "concluido" : "Não"
	},

    // Mudança do pop de Anguera
    {
		"demanda" : "Mudar o POP-ANGUERA para o Escritorio",
        "cidade" : "Anguera",
		"atividade" : [
            "AGUARDADO A COMPRA DO MATERIAL DO SOLICITADO NO DIA 21/07",
			"Refazer toda infraestrutura até a CEO MASTER.",
			"A Manutenção será feita depois das 01h00.",
            "A Equipe de também será acionanda para organização dos cabos."
		],
		"agendamento" : "á defenir",
		"equipe" : "Samuel",
		"observacao" : "AGUARDANDO COMPRA DO MATERIAL.",
        "concluido" : "Não"
	},
];

atividade.map((demanda) => {
    let cardAtividade = document.getElementById("cards");
    cardAtividade.innerHTML += `
        <li
                        class="bg-white border-l-4 border-yellow-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div class="p-6">
                            <!-- Cabeçalho -->
                            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-4">
                                <h3 class="text-xl font-semibold text-gray-800">
                                    ${demanda.demanda}
                                </h3>
                                <div class="flex flex-wrap gap-2">
                                    <span
                                        class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                        <i class="fas fa-calendar mr-1"></i> Agendado: ${demanda.agendamento}
                                    </span>
                                    <span
                                        class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                        <i class="fas fa-users mr-1"></i> Equipe: ${demanda.equipe}
                                    </span>
                                    <span
                                        class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-200 text-gray-900">
                                        <i class="fa-solid fa-circle-check mr-1" aria-hidden="true"></i> Concluido: ${demanda.concluido}
                                    </span>
                                </div>
                            </div>

                            <!-- Detalhes da manutenção -->
                            <div class="mb-2">
                                <h4 class="font-semibold text-gray-700 mb-2">Cidade: ${demanda.cidade}</h4>
                                <h4 class="font-semibold text-gray-700 mb-2">Atividades:</h4>
                                <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li>${demanda.atividade[0]}</li>
                                    <li>${demanda.atividade[1]}</li>
                                    <li>${demanda.atividade[2]}</li>
                                    <li>${demanda.atividade[3]}</li>
                                </ul>
                            </div>

                            <!-- Observação -->
                            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                                <div class="flex items-start">
                                    <span class="text-yellow-600 mr-2"><i class="fa-solid fa-triangle-exclamation"></i></span>
                                    <div>
                                        <strong class="font-semibold text-yellow-800">Observação:</strong>
                                        <p class="text-yellow-700 mt-1">${demanda.observacao}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
    `
})