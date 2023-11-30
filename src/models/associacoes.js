const Pessoa = require("./Pessoa");
const Usuario = require("./Usuario");
const Tutor = require("./Tutor");
const Clinica = require("./Clinica");

Pessoa.hasOne(Usuario,{foreignKey:'idUsuario'});

Usuario.hasOne(Tutor, {foreignKey: 'idTutor'});
Usuario.hasOne(Clinica, {foreignKey: 'idClinica'});
Usuario.belongsTo(Pessoa,{foreignKey: 'idUsuario'});

Pessoa.hasOne(Tutor, { foreignKey: 'idTutor' });
Tutor.belongsTo(Pessoa, { foreignKey: 'idTutor' });

Clinica.belongsTo(Usuario,{foreignKey: 'idUsuario'});
