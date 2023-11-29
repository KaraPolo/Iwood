import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-BR',
  title: 'Documentação IWOOD',
  description: 'Descrição do Protótipo do APP IWOOD',

  themeConfig: {
    nav: [
      { text: 'Principal', link: '/principal' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],
    search: {
      provider: 'local',
    },
    footer: {
      copyright: 'Allana & Amanda. © Todos os direitos reservados.',
    },
    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Principal', link: '/principal' },
          { text: '1. Introdução', link: '/introducao' },
          { text: '2. Descrição do Projeto', link: '/descricao' },
          {
            text: '3. Principais Recursos e Funcionalidades',
            link: '/recursos',
          },
          { text: '4. Diagrama de Caso de Uso', link: '/usos' },
          { text: '5. Diagrama de Classes', link: '/classes' },
          { text: '6. Protótipos de Telas', link: '/prototipos' },
          { text: '7. Cronograma e Entrega', link: '/cronograma' },
          { text: '8. Riscos e Mitigação', link: '/riscos' },
          { text: '9. Custos e Orçamento', link: '/custos' },
          { text: '10. Considerações Finais', link: '/consideracoes' },

          // ...
        ],
      },
    ],
  },
});
