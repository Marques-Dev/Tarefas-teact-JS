export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#7159c1'],
            user: 'https://avatars0.githubusercontent.com/u/47678452?s=460&u=8303a42d70e1002227437586956ceb5b4d2375c2&v=4'
          },
          {
            id: 2,
            content: 'Publicar no Linkedin sobre drag n drop',
            labels: ['#7159c1'],
            user: 'https://avatars0.githubusercontent.com/u/47678452?s=460&u=8303a42d70e1002227437586956ceb5b4d2375c2&v=4'
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            labels: ['#7159c1'],
            user: 'https://avatars0.githubusercontent.com/u/47678452?s=460&u=8303a42d70e1002227437586956ceb5b4d2375c2&v=4'
          },
          {
            id: 4,
            content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
            labels: ['#54e1f7'],
            user: 'https://avatars0.githubusercontent.com/u/47678452?s=460&u=8303a42d70e1002227437586956ceb5b4d2375c2&v=4'
          },
          {
            id: 5,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://avatars0.githubusercontent.com/u/47678452?s=460&u=8303a42d70e1002227437586956ceb5b4d2375c2&v=4'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Dev in Dev - Estudar Ingles',
            labels: [],
            user: 'https://avatars0.githubusercontent.com/u/47678452?s=460&u=8303a42d70e1002227437586956ceb5b4d2375c2&v=4'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Gravar sobre Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'https://avatars0.githubusercontent.com/u/47678452?s=460&u=8303a42d70e1002227437586956ceb5b4d2375c2&v=4'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://avatars0.githubusercontent.com/u/47678452?s=460&u=8303a42d70e1002227437586956ceb5b4d2375c2&v=4'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Gravar aula sobre deploy e CI com React Native',
            labels: [],
          },
          {
            id: 12,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }