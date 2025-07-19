// Dados do CSV (convertidos para JSON)
        const csvData = `ID_Demanda;Data_Demanda;Mes;Ano;Tipo_Ocorrencia;CTO_Ramal;Cidade;Equipe_Responsavel;Observacoes;Tem_Localizacao;Prioridade;Duracao_Estimada DEM_001;02/04/2025;Abril;2025;Rompimento Backbone;;Feira de Santana/Berimbau;Não Especificada;2 rotas de Berimbau paradas - Rompimento fibra 12FO;Não;Alta;24h DEM_002;20/04/2025;Abril;2025;CTO Parada;;Santo Estêvão;Não Especificada;Poste pegou fogo - fibra danificada;Sim;Alta;12h DEM_003;03/04/2025;Abril;2025;Troca Splitter;E47.CTO.97;Berimbau;Não Especificada;CTO lotada - Troca 1x8 para 1x16;Não;Media;4h DEM_004;03/04/2025;Abril;2025;Sinal Alto;E36.CTO.510;Berimbau;Não Especificada;Todas as portas com sinal alto;Não;Media;6h DEM_005;03/04/2025;Abril;2025;Fibra Baixa;;Santo Estêvão;Não Especificada;Fibra backbone baixa - precisa catraca;Sim;Media;8h DEM_006;04/04/2025;Abril;2025;Troca Splitter;E6.CTO.48;Berimbau;Não Especificada;CTO lotada - cliente pendente;Não;Media;4h DEM_007;03/04/2025;Abril;2025;Sinal Alto;E36.CTO.510;Berimbau;Não Especificada;Verificação em CTOs anterior realizada;Não;Media;6h DEM_008;03/04/2025;Abril;2025;Troca Splitter;E2.CTO.22;Berimbau;Não Especificada;CTO lotada - cliente pendente;Não;Media;4h DEM_009;03/04/2025;Abril;2025;Sinal Alto;E36.CTO.510;Berimbau;Não Especificada;Fora refeitas as fusões - sinal ajustado;Não;Media;8h DEM_010;04/04/2025;Abril;2025;Troca Splitter;E6.CTO.48;Berimbau;Não Especificada;Troca de splitter concluída;Não;Media;4h DEM_011;07/04/2025;Abril;2025;CTO Parada;E45.CTO.553;Berimbau;Não Especificada;Troca de poste;Não;Media;6h DEM_012;07/04/2025;Abril;2025;CTO Parada;E45.CTO.553;Berimbau;Não Especificada;Fibra rompida;Não;Alta;12h DEM_013;14/04/2025;Abril;2025;Fibra Parada;;Serra Preta;Equipe 01 - Marcos;Fibra fazenda Zé Mota - parada em 2 caixas;Sim;Media;8h DEM_014;14/04/2025;Abril;2025;Troca Splitter;E24.CTO.278;Berimbau;Equipe 01 - Marcos;CTO lotada;Não;Media;4h DEM_015;16/04/2025;Abril;2025;CTO Parada;E34.CTO;Berimbau;Equipe 02 - Alexsandro;Ramais parados;Não;Media;6h DEM_016;16/04/2025;Abril;2025;CTO Parada;E40.CTO;Berimbau;Equipe 01 - Marcos;Ramais parados;Não;Media;6h DEM_017;23/04/2025;Abril;2025;Rompimento Backbone;;Feira de Santana;Equipe 01 - Marcos;Rompimento fibra 12FO - Link Principal;Não;Alta;24h DEM_018;06/05/2025;Maio;2025;CTO Parada;E37.CTO.448-517;Berimbau;Equipe 01 - Marcos;Ramal E37 - multiplas CTOs paradas;Sim;Alta;12h DEM_019;07/05/2025;Maio;2025;CTO Parada;E37.CTO.511-514;Berimbau;Equipe 02 - Alexsandro;Mesmo ramal do dia anterior;Não;Alta;8h DEM_020;07/05/2025;Maio;2025;Troca Splitter;E30.CTO.386;Berimbau;Equipe 02 - Alexsandro;CTO lotada;Não;Media;4h DEM_021;07/05/2025;Maio;2025;Sinal Alto;E41.CTO.527;Berimbau;Equipe 02 - Alexsandro;Clientes com sinal alto;Não;Media;6h DEM_022;07/05/2025;Maio;2025;Rompimento Backbone;;Feira de Santana;Equipe 02 - Alexsandro;Fibra redundãncia - OLTs Marggiore e Alameda;Não;Alta;24h DEM_023;13/05/2025;Maio;2025;Rompimento Backbone;;Feira de Santana;Equipe 02 - Alexsandro;Fibra Link Principal - região shopping;Não;Alta;24h DEM_024;13/05/2025;Maio;2025;Manutenção POP;;Serra Preta;Equipe 02 - Alexsandro;Bateria estourou e pegou fogo;Não;Alta;12h DEM_025;15/05/2025;Maio;2025;Implantantação;;Berimbau;Equipe 01 - Marcos;Implantanção poste Gameleira;Não;Baixa;8h DEM_026;19/05/2025;Maio;2025;Link Redundãncia;;Feira de Santana;Equipe 02 - Alexsandro;Link redundante LeoNet parado;Sim;Media;6h DEM_027;23/05/2025;Maio;2025;Implantanção FTTH;;Berimbau;Equipe 01 - Marcos;Implementação rede FTTH Gameleira;Não;Baixa;16h DEM_028;26/05/2025;Maio;2025;Implantantção FTTH;;Berimbau;Equipe 01 - Marcos;Continuidade FTTH Gameleira - 10 CTOs;Não;Baixa;16h DEM_029;26/05/2025;Maio;2025;Interligação;;Feira de Santana;Equipe 02 - Alexsandro;Conexão Power x JS Fibra - Rota 02;Sim;Media;8h DEM_030;26/05/2025;Maio;2025;Interligação;;Feira de Santana;Equipe 02 - Alexsandro;Conexão Power x Portal Net;Sim;Media;8h DEM_031;02/06/2025;Junho;2025;Adequação COELBA;;Berimbau;Equipe 02 - Alexsandro;Reserva técnica fora do padrão;Não;Media;12h DEM_032;02/06/2025;Junho;2025;Sinal Alto;;Santo Estêvão/Feira de Santana;Equipe 02 - Alexsandro;Backbone principal com sinal alto;Não;Media;8h DEM_033;07/06/2025;Junho;2025;CTO Parada;E2.2.1/E2.2.2;Santo Estêvão;Equipe 01 - Marcos;Poda de Árvore;Sim;Media;6h DEM_034;07/06/2025;Junho;2025;Interligação;;Feira de Santana;Equipe 02 - Alexsandro;Power x Starlink - redundãncia Berimbau;Não;Media;8h DEM_035;10/06/2025;Junho;2025;AdequaÃ§Ã£o COELBA;;Berimbau;Equipe 02 - Alexsandro;Reserva técnica fora do padrão;Não;Media;12h DEM_036;11/06/2025;Junho;2025;CTO Parada;E10-18.9;Santo Estêvão;Equipe 01 - Marcos;Formiga na CTO;Não;Media;4h DEM_037;12/06/2025;Junho;2025;Rompimento Backbone;;Feira de Santana;Equipe 02 - Alexsandro;Fibra Principal Rota1 Berimbau;Não;Alta;24h DEM_038;13/06/2025;Junho;2025;Rompimento Backbone;;Berimbau;Equipe 01 - Marcos;Duas rotas de Conceição do Jacuipe;Não;Alta;24h DEM_039;13/06/2025;Junho;2025;Manutenção Backbone;;Feira de Santana;Ambas Equipes;Mudança de percurso da fibra;Sim;Media;16h DEM_040;13/06/2025;Junho;2025;Manutenção  Backbone;;Feira de Santana;Ambas Equipes;Transferir fibra poste eucalipto para COELBA;Sim;Media;12h DEM_041;17/06/2025;Junho;2025;Remoção Backbone;;Ipecaetá;Equipe 02 - Alexsandro;LanÃ§amento 900m fibra - remoçao 5 caixas;Não;Media;16h DEM_042;17/06/2025;Junho;2025;Interligação;;Santo Estêvão;Equipe 02 - Alexsandro;Power x DVDHouse - pontos EMBASA;Não;Media;8h DEM_043;18/06/2025;Junho;2025;Interligação;;Feira de Santana;Equipe 02 - Alexsandro;Power x Startlink - link não estabelecido;Não;Media;8h DEM_044;21/06/2025;Junho;2025;CTO Parada;E31-393;Berimbau;Equipe 01 - Marcos;Sem mais informaçoes;Não;Media;6h DEM_045;22/06/2025;Junho;2025;CTO Parada;E4-7.7;Santo Estêvão;Equipe 01 - Marcos;Outras CTOs do ramal funcionando;Sim;Media;6h DEM_046;25/06/2025;Junho;2025;ManutenÃ§Ã£o Backbone;;Berimbau;Equipe 02 - Alexsandro;Caminhão quebrou fibra - 10 ramais parados;Sim;Alta;12h DEM_047;26/06/2025;Junho;2025;Rompimento Backbone;;Feira de Santana;Equipe 02 - Alexsandro;Fibra redundãncia - 3.311Km afetados;Não;Alta;24h DEM_048;26/06/2025;Junho;2025;Rompimento Backbone;;Feira de Santana;Equipe 02 - Alexsandro;Fibra OLT Maggiere - OLT não voltou;Não;Alta;24h DEM_049;27/06/2025;Junho;2025;Ativação Link;;Santo Estêvão;Equipe 02 - Alexsandro;Infraestrutura 3 pontos EMBASA;Não;Media;8h`;

        // Parse CSV data
        function parseCSV(csv) {
            const lines = csv.split('\n');
            const headers = lines[0].split(';');
            const result = [];
            
            for (let i = 1; i < lines.length; i++) {
                if (!lines[i]) continue;
                const obj = {};
                const currentline = lines[i].split(';');
                
                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentline[j];
                }
                
                // Clean up and format data
                obj.Duracao_Estimada = parseInt(obj.Duracao_Estimada.replace('h', ''));
                obj.Data_Demanda = new Date(obj.Data_Demanda.split('/').reverse().join('-'));
                obj.MesAno = `${obj.Mes} ${obj.Ano}`;
                
                // Fix city names
                if (obj.Cidade.includes('/')) {
                    obj.Cidade = obj.Cidade.split('/')[0];
                }
                obj.Cidade = obj.Cidade.trim();
                
                result.push(obj);
            }
            
            return result;
        }

        const data = parseCSV(csvData);
        
        // Initialize charts
        let monthlyChart, occurrenceTypeChart, priorityChart, cityChart, cityDurationChart, teamChart, teamEfficiencyChart;

        // Filter data based on selections
        function filterData() {
            const monthFilter = document.getElementById('month-filter').value;
            const cityFilter = document.getElementById('city-filter').value;
            const teamFilter = document.getElementById('team-filter').value;
            const priorityFilter = document.getElementById('priority-filter').value;
            
            return data.filter(item => {
                return (monthFilter === 'all' || item.MesAno === monthFilter) &&
                       (cityFilter === 'all' || item.Cidade === cityFilter) &&
                       (teamFilter === 'all' || item.Equipe_Responsavel.includes(teamFilter)) &&
                       (priorityFilter === 'all' || item.Prioridade === priorityFilter);
            });
        }

        // Update all charts and tables
        function updateDashboard() {
            const filteredData = filterData();
            
            updateStats(filteredData);
            updateMonthlyChart(filteredData);
            updateOccurrenceTypeChart(filteredData);
            updatePriorityChart(filteredData);
            updateCityChart(filteredData);
            updateCityDurationChart(filteredData);
            updateTeamChart(filteredData);
            updateTeamEfficiencyChart(filteredData);
            updateDetailsTable(filteredData);
        }

        // Update statistics cards
        function updateStats(filteredData) {
            document.getElementById('total-demands').textContent = filteredData.length;
            
            const totalDuration = filteredData.reduce((sum, item) => sum + item.Duracao_Estimada, 0);
            const avgDuration = filteredData.length > 0 ? Math.round(totalDuration / filteredData.length) : 0;
            document.getElementById('avg-duration').textContent = `${avgDuration}h`;
            
            const highPriorityCount = filteredData.filter(item => item.Prioridade === 'Alta').length;
            document.getElementById('high-priority').textContent = highPriorityCount;
            
            const teamCoverage = filteredData.filter(item => !item.Equipe_Responsavel.includes('Não Especificada')).length;
            const coveragePercentage = filteredData.length > 0 ? Math.round((teamCoverage / filteredData.length) * 100) : 0;
            document.getElementById('team-coverage').textContent = `${coveragePercentage}%`;
        }

        // Update monthly chart
        function updateMonthlyChart(filteredData) {
            const months = [...new Set(data.map(item => item.MesAno))].sort((a, b) => {
                const [monthA, yearA] = a.split(' ');
                const [monthB, yearB] = b.split(' ');
                const monthsOrder = ['Abril', 'Maio', 'Junho'];
                return yearA - yearB || monthsOrder.indexOf(monthA) - monthsOrder.indexOf(monthB);
            });
            
            const counts = months.map(month => {
                return filteredData.filter(item => item.MesAno === month).length;
            });
            
            const ctx = document.getElementById('monthlyChart').getContext('2d');
            
            if (monthlyChart) {
                monthlyChart.data.labels = months;
                monthlyChart.data.datasets[0].data = counts;
                monthlyChart.update();
            } else {
                monthlyChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: months,
                        datasets: [{
                            label: 'Demandas por Mês',
                            data: counts,
                            backgroundColor: 'rgba(52, 152, 219, 0.7)',
                            borderColor: 'rgba(52, 152, 219, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Número de Demandas'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Mês'
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        return `Demandas: ${context.raw}`;
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        // Update occurrence type chart
        function updateOccurrenceTypeChart(filteredData) {
            const types = [...new Set(data.map(item => item.Tipo_Ocorrencia))];
            const counts = types.map(type => {
                return filteredData.filter(item => item.Tipo_Ocorrencia === type).length;
            });
            
            const ctx = document.getElementById('occurrenceTypeChart').getContext('2d');
            
            if (occurrenceTypeChart) {
                occurrenceTypeChart.data.labels = types;
                occurrenceTypeChart.data.datasets[0].data = counts;
                occurrenceTypeChart.update();
            } else {
                occurrenceTypeChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: types,
                        datasets: [{
                            label: 'Tipos de Ocorrência',
                            data: counts,
                            backgroundColor: [
                                'rgba(231, 76, 60, 0.7)',
                                'rgba(241, 196, 15, 0.7)',
                                'rgba(46, 204, 113, 0.7)',
                                'rgba(52, 152, 219, 0.7)',
                                'rgba(155, 89, 182, 0.7)',
                                'rgba(26, 188, 156, 0.7)',
                                'rgba(230, 126, 34, 0.7)'
                            ],
                            borderColor: [
                                'rgba(231, 76, 60, 1)',
                                'rgba(241, 196, 15, 1)',
                                'rgba(46, 204, 113, 1)',
                                'rgba(52, 152, 219, 1)',
                                'rgba(155, 89, 182, 1)',
                                'rgba(26, 188, 156, 1)',
                                'rgba(230, 126, 34, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'right',
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        const label = context.label || '';
                                        const value = context.raw || 0;
                                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                        const percentage = Math.round((value / total) * 100);
                                        return `${label}: ${value} (${percentage}%)`;
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        // Update priority chart
        function updatePriorityChart(filteredData) {
            const priorities = ['Alta', 'Media', 'Baixa'];
            const counts = priorities.map(priority => {
                return filteredData.filter(item => item.Prioridade === priority).length;
            });
            
            const ctx = document.getElementById('priorityChart').getContext('2d');
            
            if (priorityChart) {
                priorityChart.data.datasets[0].data = counts;
                priorityChart.update();
            } else {
                priorityChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: priorities,
                        datasets: [{
                            label: 'Distribuição por Prioridade',
                            data: counts,
                            backgroundColor: [
                                'rgba(231, 76, 60, 0.7)',
                                'rgba(241, 196, 15, 0.7)',
                                'rgba(46, 204, 113, 0.7)'
                            ],
                            borderColor: [
                                'rgba(231, 76, 60, 1)',
                                'rgba(241, 196, 15, 1)',
                                'rgba(46, 204, 113, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'right',
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        const label = context.label || '';
                                        const value = context.raw || 0;
                                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                        const percentage = Math.round((value / total) * 100);
                                        return `${label}: ${value} (${percentage}%)`;
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        // Update city chart
        function updateCityChart(filteredData) {
            const cities = [...new Set(data.map(item => item.Cidade))];
            const counts = cities.map(city => {
                return filteredData.filter(item => item.Cidade === city).length;
            });
            
            const ctx = document.getElementById('cityChart').getContext('2d');
            
            if (cityChart) {
                cityChart.data.labels = cities;
                cityChart.data.datasets[0].data = counts;
                cityChart.update();
            } else {
                cityChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: cities,
                        datasets: [{
                            label: 'Demandas por Cidade',
                            data: counts,
                            backgroundColor: 'rgba(155, 89, 182, 0.7)',
                            borderColor: 'rgba(155, 89, 182, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Número de Demandas'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Cidade'
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        return `Demandas: ${context.raw}`;
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        // Update city duration chart
        function updateCityDurationChart(filteredData) {
            const cities = [...new Set(data.map(item => item.Cidade))];
            const avgDurations = cities.map(city => {
                const cityData = filteredData.filter(item => item.Cidade === city);
                const totalDuration = cityData.reduce((sum, item) => sum + item.Duracao_Estimada, 0);
                return cityData.length > 0 ? Math.round(totalDuration / cityData.length) : 0;
            });
            
            const ctx = document.getElementById('cityDurationChart').getContext('2d');
            
            if (cityDurationChart) {
                cityDurationChart.data.labels = cities;
                cityDurationChart.data.datasets[0].data = avgDurations;
                cityDurationChart.update();
            } else {
                cityDurationChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: cities,
                        datasets: [{
                            label: 'Duração Média (horas)',
                            data: avgDurations,
                            backgroundColor: 'rgba(26, 188, 156, 0.7)',
                            borderColor: 'rgba(26, 188, 156, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Duração Média (horas)'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Cidade'
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        return `Duração média: ${context.raw}h`;
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        // Update team chart
        function updateTeamChart(filteredData) {
            const teams = [...new Set(data.map(item => {
                if (item.Equipe_Responsavel.includes('Equipe 01')) return 'Equipe 01 - Marcos';
                if (item.Equipe_Responsavel.includes('Equipe 02')) return 'Equipe 02 - Alexsandro';
                if (item.Equipe_Responsavel.includes('Ambas')) return 'Ambas Equipes';
                return 'Não Especificada';
            }))];
            
            const counts = teams.map(team => {
                return filteredData.filter(item => {
                    if (team === 'Equipe 01 - Marcos') return item.Equipe_Responsavel.includes('Equipe 01');
                    if (team === 'Equipe 02 - Alexsandro') return item.Equipe_Responsavel.includes('Equipe 02');
                    if (team === 'Ambas Equipes') return item.Equipe_Responsavel.includes('Ambas');
                    return item.Equipe_Responsavel === 'Não Especificada';
                }).length;
            });
            
            const ctx = document.getElementById('teamChart').getContext('2d');
            
            if (teamChart) {
                teamChart.data.labels = teams;
                teamChart.data.datasets[0].data = counts;
                teamChart.update();
            } else {
                teamChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: teams,
                        datasets: [{
                            label: 'Distribuição por Equipe',
                            data: counts,
                            backgroundColor: [
                                'rgba(52, 152, 219, 0.7)',
                                'rgba(155, 89, 182, 0.7)',
                                'rgba(241, 196, 15, 0.7)',
                                'rgba(231, 76, 60, 0.7)'
                            ],
                            borderColor: [
                                'rgba(52, 152, 219, 1)',
                                'rgba(155, 89, 182, 1)',
                                'rgba(241, 196, 15, 1)',
                                'rgba(231, 76, 60, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'right',
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        const label = context.label || '';
                                        const value = context.raw || 0;
                                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                        const percentage = Math.round((value / total) * 100);
                                        return `${label}: ${value} (${percentage}%)`;
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        // Update team efficiency chart
        function updateTeamEfficiencyChart(filteredData) {
            const teams = ['Equipe 01 - Marcos', 'Equipe 02 - Alexsandro', 'Ambas Equipes'];
            
            const avgDurations = teams.map(team => {
                const teamData = filteredData.filter(item => {
                    if (team === 'Equipe 01 - Marcos') return item.Equipe_Responsavel.includes('Equipe 01');
                    if (team === 'Equipe 02 - Alexsandro') return item.Equipe_Responsavel.includes('Equipe 02');
                    return item.Equipe_Responsavel.includes('Ambas');
                });
                                
                const totalDuration = teamData.reduce((sum, item) => sum + item.Duracao_Estimada, 0);
                return teamData.length > 0 ? Math.round(totalDuration / teamData.length) : 0;
            });
            
            const ctx = document.getElementById('teamEfficiencyChart').getContext('2d');
            
            if (teamEfficiencyChart) {
                teamEfficiencyChart.data.datasets[0].data = avgDurations;
                teamEfficiencyChart.update();
            } else {
                teamEfficiencyChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: teams,
                        datasets: [{
                            label: 'Duração Média por Equipe (horas)',
                            data: avgDurations,
                            backgroundColor: 'rgba(230, 126, 34, 0.7)',
                            borderColor: 'rgba(230, 126, 34, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Duração Média (horas)'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Equipe'
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        return `Duração média: ${context.raw}h`;
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        // Update details table
        function updateDetailsTable(filteredData) {
            const tableBody = document.querySelector('#detailsTable tbody');
            tableBody.innerHTML = '';
            
            filteredData.forEach(item => {
                const row = document.createElement('tr');
                
                // Add priority class to row
                if (item.Prioridade === 'Alta') {
                    row.classList.add('priority-high');
                } else if (item.Prioridade === 'Media') {
                    row.classList.add('priority-medium');
                } else {
                    row.classList.add('priority-low');
                }
                
                row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${item.ID_Demanda}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.Data_Demanda.toLocaleDateString('pt-BR')}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.Cidade}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.Tipo_Ocorrencia}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.Equipe_Responsavel}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${item.Prioridade === 'Alta' ? 'bg-danger text-white' : 
                              item.Prioridade === 'Media' ? 'bg-warning text-white' : 'bg-success text-white'}">
                            ${item.Prioridade}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.Duracao_Estimada}h</td>
                    <td class="px-6 py-4 text-sm text-gray-500">${item.Observacoes}</td>
                `;
                
                tableBody.appendChild(row);
            });
        }

        // Initialize filters
        function initializeFilters() {
            const monthFilter = document.getElementById('month-filter');
            const cityFilter = document.getElementById('city-filter');
            const teamFilter = document.getElementById('team-filter');
            
            // Add months
            const months = [...new Set(data.map(item => item.MesAno))].sort((a, b) => {
                const [monthA, yearA] = a.split(' ');
                const [monthB, yearB] = b.split(' ');
                const monthsOrder = ['Abril', 'Maio', 'Junho'];
                return yearA - yearB || monthsOrder.indexOf(monthA) - monthsOrder.indexOf(monthB);
            });
            
            months.forEach(month => {
                const option = document.createElement('option');
                option.value = month;
                option.textContent = month;
                monthFilter.appendChild(option);
            });
            
            // Add cities
            const cities = [...new Set(data.map(item => item.Cidade))];
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                cityFilter.appendChild(option);
            });
            
            // Add teams
            const teams = ['Equipe 01 - Marcos', 'Equipe 02 - Alexsandro', 'Ambas Equipes'];
            teams.forEach(team => {
                const option = document.createElement('option');
                option.value = team;
                option.textContent = team;
                teamFilter.appendChild(option);
            });
            
            // Add event listeners
            monthFilter.addEventListener('change', updateDashboard);
            cityFilter.addEventListener('change', updateDashboard);
            teamFilter.addEventListener('change', updateDashboard);
            document.getElementById('priority-filter').addEventListener('change', updateDashboard);
        }

        // Tab functionality
        function setupTabs() {
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs and contents
                    document.querySelectorAll('.tab').forEach(t => {
                        t.classList.remove('bg-secondary', 'text-white');
                        t.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
                    });
                    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked tab and corresponding content
                    tab.classList.remove('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
                    tab.classList.add('bg-secondary', 'text-white');
                    const tabId = tab.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
        }

        // Initialize dashboard
        function initDashboard() {
            initializeFilters();
            setupTabs();
            updateDashboard();
        }

        // Start the dashboard when the page loads
        window.addEventListener('load', initDashboard);