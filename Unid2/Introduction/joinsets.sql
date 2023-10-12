create table usuario(nome varchar(100), cidade varchar(100));
create table cidade_(cidade varchar(100), estado varchar(100));

insert into usuario(nome, cidade) values ('aliceu', 'salv');

insert into usuario(nome, cidade) values('fabricio', 'sjc');
insert into usuario(nome, cidade) values('ronaldo', 'bel');
insert into usuario(nome, cidade) values('ana', 'sp');
insert into usuario(nome, cidade) values('pedro', 'palmas');

insert into cidade_(cidade, estado) values('sjc', 'sp');
insert into cidade_(cidade, estado) values('bel', 'pa');
insert into cidade_(cidade, estado) values('sp', 'sp');
insert into cidade_(cidade, estado) values('manaus', 'am');


select * from cidade;
select * from usuario;

select * from usuario as u join cidade_ as c on u.cidade = c.cidade;

select * from usuario as u left join cidade_ as c on u.cidade = c.cidade;

select * from usuario as u right join cidade_ as c on u.cidade = c.cidade;

select * from usuario natural join cidade_;

select * from usuario except (select * from usuario where nome = 'aliceu');

