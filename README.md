# Mask Fields

[![GitHub license](https://img.shields.io/github/license/jsdaniell/mask-fields)](https://github.com/jsdaniell/mask-fields/blob/master/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/jsdaniell/mask-fields)](https://github.com/jsdaniell/mask-fields/issues) [![npm](https://img.shields.io/badge/version-v2.0.2-blue)](https://www.npmjs.com/package/@jsdaniell/mask-fields)

The npm package to mask and format fields.

## For what?

This package allows you to format string data in standard formats such as the examples below.

- CPF Brazillian Document → 123.456.789.00
- Telephone Number → (85) 12345 -7890
- Brazillian Postal Code → 12.355-201
- CNPJ Brazillian Document → 12.345.678/1234-00
- Credit Card → 1234.5678.3216.6547
- Brazillian General Document → 1234567890-1
- Date → 02/08/2019
- Money → 100,00 - 1000,00...

### Aditional Formats

- Only numbers filter mask, don't allow non-numeric characters.
- No latin letters → Permissives [123,.-=+...] ← No letters
- Only letters [abcDEF...]

## Install
To install the package run `npm install @jsdaniell/mask-fields` on terminal.

## How to use?

1. First, import the package on your project:

```javascript
import format from "@jsdaniell/mask-fields";
```

2. Then you can use the mask on any local that's shows data.

Example using React:

```javascript
 <TextField value={format.date(02112019)}>
```

The result will be → 02/11/2019

Remember to use `format.num(event.target.value)` on onChange event of TextField or any component that you're using to reformat the string to numbers again, or `format.onlyLetters(event.target.value) to reformat to only latin characters string.
