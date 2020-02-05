export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3a6e9229eb544395f57dff',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-nytco7s5',
                  apiId: '17eb01e1-0d5e-495c-9468-d698c2a3e794'
                },
                {
                  buildHookId: '5e3a6e928512aa8cd0f8c0be',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-vr1s6dj9',
                  apiId: '3afe92fe-4aa3-414f-a7ec-7e98307c8b36'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MANTENN/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-vr1s6dj9.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
