
CREATE TABLE RacaAmimal  (
                idRacaAnimal INTEGER NOT NULL,
                descricao VARCHAR(60) NOT NULL,
                CONSTRAINT RacaAnimal_pk PRIMARY KEY (idRacaAnimal)
);


CREATE TABLE EspecieAnimal (
                idEspecieAnimal INTEGER NOT NULL,
                idRacaAnimal INTEGER NOT NULL,
                descricao VARCHAR(50) NOT NULL,
                CONSTRAINT EspecieAnimal_pk PRIMARY KEY (idEspecieAnimal)
);


CREATE TABLE Pessoa (
                idPessoa INTEGER NOT NULL,
                Nome VARCHAR NOT NULL,
                CONSTRAINT Pessoa_pk PRIMARY KEY (idPessoa)
);


CREATE TABLE Adm (
                idPessoa INTEGER NOT NULL,
                email VARCHAR NOT NULL,
                senha VARCHAR NOT NULL,
                CONSTRAINT Adm_pk PRIMARY KEY (idPessoa)
);


CREATE TABLE Usurios (
                idUsuario INTEGER NOT NULL,
                emailUsuario VARCHAR NOT NULL,
                senha VARCHAR NOT NULL,
                CONSTRAINT Usurios_pk PRIMARY KEY (idUsuario)
);


CREATE TABLE Tutor (
                idTutor INTEGER NOT NULL,
                CONSTRAINT Tutor_pk PRIMARY KEY (idTutor)
);


CREATE TABLE Animal (
                idAnimal INTEGER NOT NULL,
                idTutor INTEGER NOT NULL,
                Nome CHAR(20) NOT NULL,
                idade TINYINT NOT NULL,
                Peso DECIMAL(4,2) NOT NULL,
                idEspecieAnimal INTEGER NOT NULL,
                CONSTRAINT Animal_pk PRIMARY KEY (idAnimal, idTutor)
);


CREATE TABLE ListaAnimais (
                idAnimal INTEGER NOT NULL,
                idTutor INTEGER NOT NULL,
                CONSTRAINT ListaAnimais_pk PRIMARY KEY (idAnimal, idTutor)
);


CREATE TABLE Telefone (
                sequencia INTEGER NOT NULL,
                idUsuario INTEGER NOT NULL,
                numeroTelefone INTEGER NOT NULL,
                DDD TINYINT NOT NULL,
                DDI SMALLINT NOT NULL,
                CONSTRAINT Telefone_pk PRIMARY KEY (sequencia, idUsuario)
);


CREATE TABLE TipoLogradouro (
                idTipoLogradouro SMALLINT NOT NULL,
                descricao VARCHAR(20) NOT NULL,
                CONSTRAINT TipoLogradouro_pk PRIMARY KEY (idTipoLogradouro)
);


CREATE TABLE UnidadeFederativa (
                UF CHAR NOT NULL,
                nomeEstado VARCHAR(25) NOT NULL,
                CONSTRAINT UnidadeFederativa_pk PRIMARY KEY (UF)
);


CREATE TABLE Cidade (
                idCidade SMALLINT NOT NULL,
                UF CHAR NOT NULL,
                nomeCidade VARCHAR(50) NOT NULL,
                CEP INTEGER NOT NULL,
                CONSTRAINT Cidade_pk PRIMARY KEY (idCidade)
);


CREATE TABLE Endereco (
                idEndereco INTEGER NOT NULL,
                idTipoLogradouro SMALLINT NOT NULL,
                idCidade SMALLINT NOT NULL,
                numeroEndereco INTEGER NOT NULL,
                complemento VARCHAR(100) NOT NULL,
                bairro VARCHAR(100) NOT NULL,
                CONSTRAINT Endereco_pk PRIMARY KEY (idEndereco)
);


CREATE TABLE Clinica (
                idClinica INTEGER NOT NULL,
                idEndereco INTEGER NOT NULL,
                CONSTRAINT Clinica_pk PRIMARY KEY (idClinica)
);


CREATE TABLE Chamado (
                idChamado INTEGER NOT NULL,
                idClinica INTEGER NOT NULL,
                data DATE NOT NULL,
                CONSTRAINT Chamado_pk PRIMARY KEY (idChamado)
);


CREATE TABLE RegistroDoacao (
                idDoacao INTEGER NOT NULL,
                idAnimal INTEGER NOT NULL,
                idClinica INTEGER NOT NULL,
                idChamado INTEGER NOT NULL,
                idTutor INTEGER NOT NULL,
                CONSTRAINT RegistroDoacao_pk PRIMARY KEY (idDoacao)
);


ALTER TABLE EspecieAnimal ADD CONSTRAINT RaçaAnimal_EspecieAnimal_fk
FOREIGN KEY (idRacaAnimal)
REFERENCES RacaAnimal (idRacaAnimal)

ALTER TABLE Animal ADD CONSTRAINT EspecieAnimal_Animal_fk
FOREIGN KEY (idEspecieAnimal)
REFERENCES EspecieAnimal (idEspecieAnimal)

ALTER TABLE Usurios ADD CONSTRAINT Pessoa_Usuários_fk
FOREIGN KEY (idUsuario)
REFERENCES Pessoa (idPessoa)

ALTER TABLE Adm ADD CONSTRAINT Pessoa_Adm_fk
FOREIGN KEY (idPessoa)
REFERENCES Pessoa (idPessoa)

ALTER TABLE Telefone ADD CONSTRAINT Usuários_Telefone_fk
FOREIGN KEY (idUsuario)
REFERENCES Usurios (idUsuario)

ALTER TABLE Clinica ADD CONSTRAINT Usuários_Clinica_fk
FOREIGN KEY (idClinica)
REFERENCES Usurios (idUsuario)

ALTER TABLE Tutor ADD CONSTRAINT Usuários_Tutor_fk
FOREIGN KEY (idTutor)
REFERENCES Usurios (idUsuario)

ALTER TABLE Animal ADD CONSTRAINT Tutor_Animal_fk
FOREIGN KEY (idTutor)
REFERENCES Tutor (idTutor)

ALTER TABLE ListaAnimais ADD CONSTRAINT Animal_ListaAnimais_fk
FOREIGN KEY (idAnimal, idTutor)
REFERENCES Animal (idAnimal, idTutor)

ALTER TABLE RegistroDoacao ADD CONSTRAINT Animal_RegistroDoacao_fk
FOREIGN KEY (idAnimal, idTutor)
REFERENCES Animal (idAnimal, idTutor)

ALTER TABLE Endereco ADD CONSTRAINT TipoLogradouro_Endereco_fk
FOREIGN KEY (idTipoLogradouro)
REFERENCES TipoLogradouro (idTipoLogradouro)

ALTER TABLE Cidade ADD CONSTRAINT UnidadeFederativa_Cidade_fk
FOREIGN KEY (UF)
REFERENCES UnidadeFederativa (UF)

ALTER TABLE Endereco ADD CONSTRAINT Cidade_Endereco_fk
FOREIGN KEY (idCidade)
REFERENCES Cidade (idCidade)

ALTER TABLE Clinica ADD CONSTRAINT Endereco_Clinica_fk
FOREIGN KEY (idEndereco)
REFERENCES Endereco (idEndereco)

ALTER TABLE RegistroDoacao ADD CONSTRAINT Clinica_RegistroDoacao_fk
FOREIGN KEY (idClinica)
REFERENCES Clinica (idClinica)

ALTER TABLE Chamado ADD CONSTRAINT Clinica_Chamado_fk
FOREIGN KEY (idClinica)
REFERENCES Clinica (idClinica)

ALTER TABLE RegistroDoacao ADD CONSTRAINT Chamado_RegistroDoacao_fk
FOREIGN KEY (idChamado)
REFERENCES Chamado (idChamado)


