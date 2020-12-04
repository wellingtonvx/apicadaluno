"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caracteres',
            },
          },
        },
        sobrenome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo sobrenome deve ter entre 3 e 255 caracteres',
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email ja cadastrado, cadastre um email diferente',
          },
          validate: {
            isEmail: {
              msg: 'E-mail Inválido',
            },
          },
        },
        idade: {
          type: _sequelize2.default.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Idade precisa se um numero inteiro',
            },
          },
        },
        peso: {
          type: _sequelize2.default.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Peso Prcisa ser um numero real, e não pode ser string',
            },
          },
        },
        altura: {
          type: _sequelize2.default.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Altura Prcisa ser um numero real, e não pode ser string',
            },
          },
        },
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
