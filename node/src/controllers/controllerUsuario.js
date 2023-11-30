const Usuario = require('../models/Usuario');
const ModelUsuario = require('../models/Usuario');

module.exports = {
    async List(req, res) {
        try {
          // Procura todasos usuarios no banco de dados
          const usuarios = await ModelPessoa.findAll();
          // Retorna um JSON com todas os usuarios encontrados
          return res.json(usuarios);
        } catch (error) {
          // Se houver algum erro durante o processo, é capturado aqui
          console.error("Erro na List:", error);
          // Retorna um status 500 e uma mensagem de erro genérica
          return res.status(500).json({ error: "Erro ao listar usuarios" });
        }
      },

      async Create(req, res) {
        try {
          // Cria uma nova entrada de usuario no banco de dados usando os dados recebidos na requisição
          const novoUsuario = await ModelUsuario.create({
            idUsuario: req.body.idUsuario,
            email: req.body.email,
            senha: req.body.senha
          });
          // Retorna os dados do novo usuario criado em formato JSON como resposta à requisição
          return res.json(novoUsuario);
        } catch (error) {
          // Se houver algum erro durante o processo, é capturado aqui
          console.error("Erro na Create:", error);
          // Retorna um status 500 e uma mensagem de erro genérica
          return res.status(500).json({ error: "Erro ao criar usuario" });
        }
      },

      async Update(req, res) {
        try {
          // Encontra o usuario no banco de dados pelo ID recebido na requisição
          const usua = await ModelUsuario.findByPk(req.body.idUsuario);
          
          if (usua) {
            // Se a pessoa foi encontrada, atualiza o campo 'Nome' com o valor recebido na requisição
            usua.email = req.body.email;
            usua.senha = req.body.senha;
            // Salva as alterações feitas no registro da pessoa no banco de dados
            await usua.save();
            // Retorna os dados do usuario atualizados em formato JSON como resposta à requisição
            return res.json(usua);
          } else {
            // Se o usuario não foi encontrada, retorna um status 404 e uma mensagem indicando que a pessoa não foi encontrada
            return res.status(404).json({ error: "Usuario não encontrada" });
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
          // Encontra o usuario no banco de dados pelo ID recebido como parâmetro na URL
          const usua = await ModelUsuario.findByPk(req.params.id);
          
          if (usua) {
            // Se o usuario for encontrado, retorna os dados do usuario em formato JSON como resposta à requisição
            return res.json(usua);
          } else {
            // Se o usuario não foi encontrado, retorna um status 404 e uma mensagem indicando que a pessoa não foi encontrada
            return res.status(404).json({ error: "Usuario não encontrado" });
          }
        } catch (error) {
          // Se houver algum erro durante o processo, é capturado aqui
          console.error("Erro no GetOne:", error);
          // Retorna um status 500 e uma mensagem de erro genérica
          return res.status(500).json({ error: "Erro ao obter usuario" });
        }
      }
      ,

  async Delete(req, res) {
    try {
      // Procura o usuario pelo ID passado como parâmetro na URL
      const usua = await ModelUsuario.findByPk(req.params.id);
  
      if (usua) {
        // Se encontrar o usuario, deleta ela do banco de dados
        await usua.destroy();
        // Retorna um JSON com os dados do usuario deletada
        return res.json(usua);
      } else {
        // Se o usuario não foi encontrado, retorna um status 404 e uma mensagem de erro
        return res.status(404).json({ error: "Usuario não encontrada" });
      }
    } catch (error) {
      // Se houver algum erro durante o processo, é capturado aqui
      console.error("Erro no Delete:", error);
      // Retorna um status 500 e uma mensagem de erro genérica
      return res.status(500).json({ error: "Erro ao deletar usuario" });
    }
  }
  
};
