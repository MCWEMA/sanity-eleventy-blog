export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5ebafbd2ff8e4602353db4a4',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-rvfvem4v',
                  apiId: 'd7611480-e6bd-4318-9f86-4aa7e5d59e6a'
                },
                {
                  buildHookId: '5ebafbd25e2d42017489b64b',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-k81xyab8',
                  apiId: 'ebad79f6-4f9b-470c-aee0-13ad0de59038'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MCWEMA/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-k81xyab8.netlify.app', category: 'apps'}
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
