// As threads que demoram mto tempo não bloqueiam o thread principal
// Ocorrem de forma simultânea, em fila, um atrás do outro, porém
// a API da web funciona por baixo dos panos executando tarefas secundárias
// em threads diferentes em paralelo.