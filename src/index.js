/* All masks are created with regular expressions */

// Brazilian CPF Document Format [123.456.789-00]

var cpf = cpf => {
  cpf = cpf.toString();
  cpf = cpf.replace(/\D/g, "");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return cpf;
};

// Telephone Number Format [(85) 12345 -7890]

var tel = tel => {
  tel = tel.toString();
  tel = tel.replace(/\D/g, "");
  tel = tel.replace(/^(\d)/, "($1");
  tel = tel.replace(/(.{3})(\d)/, "$1)$2");
  if (tel.length == 9) {
    tel = tel.replace(/(.{1})$/, "-$1");
  } else if (tel.length == 10) {
    tel = tel.replace(/(.{2})$/, "-$1");
  } else if (tel.length == 11) {
    tel = tel.replace(/(.{3})$/, "-$1");
  } else if (tel.length == 12) {
    tel = tel.replace(/(.{4})$/, "-$1");
  } else if (tel.length > 12) {
    tel = tel.replace(/(.{4})$/, "-$1");
  }
  return tel;
};

// CEP Brazilian Postal Number Format [12.355-201]

var cep = cep => {
  cep = cep.toString();
  cep = cep.replace(/\D/g, "");
  cep = cep.replace(/^(\d{2})(\d)/, "$1.$2");
  cep = cep.replace(/\.(\d{3})(\d)/, ".$1-$2");
  return cep;
};

// CNPJ Format [12.345.678/1234-00]

var cnpj = cnpj => {
  cnpj = cnpj.toString();
  cnpj = cnpj.replace(/\D/g, "");
  cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
  cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
  cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");
  return cnpj;
};

// Only numbers filter mask, don't allow non-numeric characters.

var num = num => {
  num = num.toString();
  num = num.replace(/\D/g, "");
  return num;
};

// RG General Brazillian Document Format [1234567890-1]

var rg = rg => {
  rg = rg.toString();
  rg = rg.replace(/(\d{2})(\d)/, "$1.$2");
  rg = rg.replace(/(\d{5})(\d)/, "$1.$2");
  rg = rg.replace(/(\d{3})(\d)/, "$1.$2");
  rg = rg.replace(/(\d{9})(\d)/, "$1-$2");
  return rg;
};

// Credit Card Numbers Format [1234.5678.3216.6547]

var card = card => {
  card = card.toString();
  card = card.replace(/\D/g, "");
  card = card.replace(/(\d{4})(\d)/, "$1.$2");
  card = card.replace(/(\d{4})(\d)/, "$1.$2");
  card = card.replace(/(\d{4})(\d)/, "$1.$2");
  card = card.replace(/(\d{4})(\d)/, "$1.$2");
  return card;
};

// DateTime numbers format with "/" [02/08/2019]

var date = data => {
  data = data.toString();
  data = data.replace(/\D/g, "");
  data = data.replace(/(\d{2})(\d)/, "$1/$2");
  data = data.replace(/(\d{2})(\d)/, "$1/$2");
  return data;
};

// Money format [100,00] - [1000,00]...

var money = moeda => {
  moeda = moeda.toString();
  moeda = moeda.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return moeda;
};

// No latin letters → Permissives [123,.-=+...] ← No letters

var noLetters = string => {
  string = string.toString();
  string = string.replace(/[a-z]/gi, "");
  return string;
};

// Allow only letters [abcDEF...]

var onlyLetters = string => {
  string = string.toString();
  string = string.replace(/[^a-zA-Z]+/g, "");
  return string;
};

// Exports

exports.cpf = cpf;
exports.tel = tel;
exports.cep = cep;
exports.cnpj = cnpj;
exports.rg = rg;
exports.card = card;
exports.num = num;
exports.date = date;
exports.money = money;
exports.noLetters = noLetters;
exports.onlyLetters = onlyLetters;
