import Alunos from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Alunos.findAll({
      attributes: [
        'id',
        'nome',
        'sobrenome',
        'email',
        'idade',
        'peso',
        'altura',
      ],
      order: [
        ['id', 'DESC'],
        [Foto, 'id', 'DESC'],
      ],
      include: {
        model: Foto,
        attributes: ['url', 'filename'],
      },
    });
    res.json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await Alunos.findByPk(id, {
        attributes: [
          'id',
          'nome',
          'sobrenome',
          'email',
          'idade',
          'peso',
          'altura',
        ],
        order: [
          ['id', 'DESC'],
          [Foto, 'id', 'DESC'],
        ],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno Inexistente'],
        });
      }

      return res.json(aluno);
    } catch (error) {
      return res.status(401).json({
        error: ['Aluno Inexistente'],
      });
    }
  }

  async store(req, res) {
    try {
      const novoAluno = await Alunos.create(req.body);

      const { id, nome, sobrenome, email, idade, peso, altura } = novoAluno;

      return res.json({
        id,
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      });
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await Alunos.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno Inexistente'],
        });
      }

      const updateAluno = await aluno.update(req.body);

      return res.json(updateAluno);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await Alunos.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno Inexistente'],
        });
      }

      aluno.destroy();

      return res.json(`Aluno ${aluno.nome} excluido com sucesso`);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
