"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });

      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const novoUsuario = await _User2.default.create(req.body);

      const { id, nome, email } = novoUsuario;

      return res.json({ id, nome, email });
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist'],
        });
      }

      const uptade = await user.update(req.body);

      return res.json(uptade);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist'],
        });
      }
      await user.destroy();

      return res.json(`Usuário ${user.nome} deletado com sucesso`);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

exports. default = new UserController();
