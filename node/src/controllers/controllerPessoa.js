const ModelPessoa = require('../models/Pessoa');

module.exports = {
    async List(req, res) {
        try {
          // Procura todas as pessoas no banco de dados
          const pessoas = await ModelPessoa.findAll();
          // Retorna um JSON com todas as pessoas encontradas
          return res.json(pessoas);
        } catch (error) {
          // Se houver algum erro durante o processo, é capturado aqui
          console.error("Erro na List:", error);
          // Retorna um status 500 e uma mensagem de erro genérica
          return res.status(500).json({ error: "Erro ao listar pessoas" });
        }
      },

      async Create(req, res) {
        try {
          // Cria uma nova entrada de pessoa no banco de dados usando os dados recebidos na requisição
          const novaPessoa = await ModelPessoa.create({
            idPessoa: req.body.idPessoa,
            Nome: req.body.Nome
          });
          // Retorna os dados da nova pessoa criada em formato JSON como resposta à requisição
          return res.json(novaPessoa);
        } catch (error) {
          // Se houver algum erro durante o processo, é capturado aqui
          console.error("Erro na Create:", error);
          // Retorna um status 500 e uma mensagem de erro genérica
          return res.status(500).json({ error: "Erro ao criar pessoa" });
        }
      },

      async Update(req, res) {
        try {
          // Encontra a pessoa no banco de dados pelo ID recebido na requisição
          const pess = await ModelPessoa.findByPk(req.body.idPessoa);
          
          if (pess) {
            // Se a pessoa foi encontrada, atualiza o campo 'Nome' com o valor recebido na requisição
            pess.Nome = req.body.Nome;
            // Salva as alterações feitas no registro da pessoa no banco de dados
            await pess.save();
            // Retorna os dados da pessoa atualizados em formato JSON como resposta à requisição
            return res.json(pess);
          } else {
            // Se a pessoa não foi encontrada, retorna um status 404 e uma mensagem indicando que a pessoa não foi encontrada
            return res.status(404).json({ error: "Pessoa não encontrada" });
          }
        } catch (error) {
          // Se houver algum erro durante o processo, é capturado aqui
          console.error("Erro na Update:", error);
          // Retorna um status 500 e uma mensagem de erro genérica
          return res.status(500).json({ error: "Erro ao atualizar pessoa" });
        }
      }
      ,
      async GetOne(req, res) {
        try {
          // Encontra a pessoa no banco de dados pelo ID recebido como parâmetro na URL
          const pess = await ModelPessoa.findByPk(req.params.id);
          
          if (pess) {
            // Se a pessoa foi encontrada, retorna os dados da pessoa em formato JSON como resposta à requisição
            return res.json(pess);
          } else {
            // Se a pessoa não foi encontrada, retorna um status 404 e uma mensagem indicando que a pessoa não foi encontrada
            return res.status(404).json({ error: "Pessoa não encontrada" });
          }
        } catch (error) {
          // Se houver algum erro durante o processo, é capturado aqui
          console.error("Erro no GetOne:", error);
          // Retorna um status 500 e uma mensagem de erro genérica
          return res.status(500).json({ error: "Erro ao obter pessoa" });
        }
      },

  async Delete(req, res) {
    try {
      // Procura a pessoa pelo ID passado como parâmetro na URL
      const pess = await ModelPessoa.findByPk(req.params.id);
  
      if (pess) {
        // Se encontrar a pessoa, deleta ela do banco de dados
        await pess.destroy();
        // Retorna um JSON com os dados da pessoa deletada
        return res.json(pess);
      } else {
        // Se a pessoa não foi encontrada, retorna um status 404 e uma mensagem de erro
        return res.status(404).json({ error: "Pessoa não encontrada" });
      }
    } catch (error) {
      // Se houver algum erro durante o processo, é capturado aqui
      console.error("Erro no Delete:", error);
      // Retorna um status 500 e uma mensagem de erro genérica
      return res.status(500).json({ error: "Erro ao deletar pessoa" });
    }
  }
  
};
