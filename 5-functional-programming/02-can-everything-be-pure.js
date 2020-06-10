// O objetivo é minimizar os efeitos colaterais, uma aplicação se comunica
// com o navegador, os frameworks compilam o código para deixa-lo entendível,
// então um app é passível de erros, efeitos colaterais.

// Porém com funções puras, e testes automatizados, é possível ir rapidamente
// onde o erro está acontecendo e solucioná-lo

// Perfect function
// Executar apenas uma tarefa
// Deve retornar algo, sempre que damos uma entrada, esperamos algo dela, pure function
// Não compartilhar o estado com outras funções
// Estado imutável, sempre retorna uma nova cópia da saída, não o mesmo dado
// Funções devem ser previsíveis