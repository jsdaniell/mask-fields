# Mask Fields

[![GitHub license](https://img.shields.io/github/license/jsdaniell/mask-fields)](https://github.com/jsdaniell/mask-fields/blob/master/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/jsdaniell/mask-fields)](https://github.com/jsdaniell/mask-fields/issues) [![npm](https://img.shields.io/badge/version-v2.1.0-blue)](https://www.npmjs.com/package/@jsdaniell/mask-fields)

The npm package to mask and format fields.

## For what?

This package allows you to format string data in standard formats such as the examples below.

- CPF Brazillian Document - 12345678900 → 123.456.789.00
- Telephone Number - 85123457890 → (85)12345-7890
- Brazillian Postal Code - 12355201 → 12.355-201
- CNPJ Brazillian Document - 12345678123400 → 12.345.678/1234-00
- Credit Card - 1234567832166547 → 1234.5678.3216.6547
- Brazillian General Document - 12345678901 → 1234567890-1
- Date - 02082019 → 02/08/2019
- Money - 1000 → 1,000...

### Aditional Formats

- Only numbers filter mask, don't allow non-numeric characters.
- No latin letters → Permissives [123,.-=+...] ← No letters
- Only letters [abcDEF...]

## Install

To install the package run `npm install --save @jsdaniell/mask-fields` on terminal inside your project.

## How to use?

1. First, import the package on your project:

```javascript
import format from "@jsdaniell/mask-fields";
```

2. Then you can use the mask on any local that's shows data.

Example of use on React component:

```javascript
<TextField
  fullWidth
  value={format.tel("85012346789")}
  onChange={event => {
    let value = format.num(event.target.value); // Reformat value for only numbers to treat the number.
    onChange(value);
  }}
  variant="outlined"
  label="Valor"
/>
```

The result will be → (85)01234-6789

Remember to use `format.num(event.target.value)` on onChange event of TextField or any component that you're using to reformat the string to numbers again when passing value on `onChange` event, or `format.onlyLetters(event.target.value)` to reformat to only latin characters string.

## List of supported masks

It's not required that the value passed have to be a string.

```javascript
format.cpf(); // Brazillian CPF Document
format.tel(); // Phone Number
format.cep(); // Brazillian Postal Code
format.cnpj(); // Brazillian Juridic Person Document
format.card(); // Credit Card
format.rg(); // Brazillian General Document
format.date(); // Date Time format
format.money(); // Money format
format.noLetters(); // No letter characters allowed
format.onlyLetters(); // Only letters characters are returned
```
