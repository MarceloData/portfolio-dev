# Portfolio Dev

Template baseado no Resume, de startbootstrap

Para verificar a documentação, [acesse aqui](https://www.gatsbyjs.org/docs/building-with-components/).

## Como instalar

Você vai precisar do gatsby-cli instalado globalmente:

```sh
npm install --global gatsby-cli
```

Para que você possa executar o comando a seguir:

```sh
gatsby new <nome_do_site> https://github.com/frontfabi/portfolio-dev
```

Pronto! Você já terá seu Portfolio Dev instalado! Para rodar o projeto:

```sh
cd <nome_do_site>
gatsby develop
```

### Customizando

Você pode editar o aquivo `config/siteInfo.js` para alterar conforme desejar as informações do site:

```javascript
module.exports = {
  siteTitle: 'Portfolio Dev', // <title>
  ...
  firstName: 'Fabi',
  lastName: 'Rodrigues',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/frontfabi',
    }
    ...
  ],
};

```

#### Mudando a cor do tema

Para mudar a cor do tema, substitua o hexa da variável `$primary` no arquivo `src/assets/sass/_variables.scss`.

### Contribuindo

Sugestões e Pull Requests são bem vindas!

Abra uma issue e submeta uma PR para contribuir!
