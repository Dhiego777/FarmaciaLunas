const datas = [
  {
     id:1,
     link:"https://www.freecodecamp.org/",
     tema:"Geral",
     title:"Inicio ao Topo",
     nivel:"Iniciante",
     tipo:"Trilha",
     free:true
  },
  {
     id:2,
     link:"https://coursera.org/",
     tema:"Geral",
     title:"Encontre seu Curso",
     nivel:"Todos",
     tipo:"Plataforma",
     free:true
  },
  {
     id:3,
     link:"https://devdojo.academy/index.html#Cursos",
     tema:"Geral",
     title:"",
     nivel:"Todos",
     tipo:"Plataforma",
     free:true
  },
  {
     id:4,
     link:"https://www.udemy.com/course/curso-web/",
     tema:"Web",
     title:"Curso Web Moderno",
     nivel:"Todos",
     tipo:"Curso",
     free:false
  },
  {
     id:5,
     link:"https://www.youtube.com/channel/UCXUWGUoYNwtRxaRPoB4KocA",
     tema:"Web",
     title:"Canal do Tiago Matos",
     nivel:"Todos",
     tipo:"Canal do Youtube",
     free:true
  },
  {
     id:6,
     link:"https://www.udemy.com/course/curso-web/",
     tema:"Web",
     title:"Curso Web Moderno",
     nivel:"Todos",
     tipo:"Curso",
     free:false
  },
  {
     id:7,
     link:"https://www.udemy.com/course/vue-js-completo/",
     tema:"Web",
     title:"Curso Vue JS 2",
     nivel:"Todos",
     tipo:"Curso",
     free:false
  },
  {
     id:8,
     link:"https://www.udemy.com/course/react-redux-pt/",
     tema:"Web",
     title:"Curso React + Redux",
     nivel:"Todos",
     tipo:"Curso",
     free:false
  },
  {
     id:9,
     link:"https://www.youtube.com/c/loianegroner/featured",
     tema:"Web",
     title:"Canal da Loiane Groner",
     nivel:"Todos",
     tipo:"Canal do Youtube",
     free:true
  },
  {
     id:10,
     link:"https://www.youtube.com/watch?v=wsAQQioPIJs&list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL",
     tema:"Web",
     title:"Curso de Vue 3",
     nivel:"Todos",
     tipo:"Canal do Youtube",
     free:true
  },
  {
     id:11,
     link:"https://www.udemy.com/course/docker-mastery/",
     tema:"DevOps",
     title:"Docker Mastery",
     nivel:"Todos",
     tipo:"Curso",
     free:false
  },
  {
     id:12,
     link:"https://www.udemy.com/course/curso-docker/",
     tema:"DevOps",
     title:"Docker",
     nivel:"Iniciante",
     tipo:"Curso",
     free:false
  },
  {
     id:13,
     link:"https://www.udemy.com/course/bancos-de-dados-relacionais-basico-avancado/",
     tema:"Database",
     title:"Banco de Dados e SQL",
     nivel:"Todos",
     tipo:"Curso",
     free:false
  },
  {
     id:14,
     link:"https://www.udemy.com/course/marketing-digital-completo/",
     tema:"Business",
     title:"Marketing Digital",
     nivel:"Todos",
     tipo:"Curso",
     free:false
  },
  {
     id:15,
     link:"https://www.udemy.com/course/restful-apis/learn/lecture/5888936?start=0",
     tema:"API's & Microsevices",
     title:"Entendendo e documentando REST / RESTful APIs",
     nivel:"Todos",
     tipo:"Curso",
     free:false
  },
  {
     id:16,
     link:"https://www.youtube.com/playlist?list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn",
     tema:"API's & Microsevices",
     title:"Criando APIs com Node.js",
     nivel:"Iniciante",
     tipo:"Canal do Youtube",
     free:true
  },
  {
     id:17,
     link:"https://phauer.com/2019/modern-best-practices-testing-java/",
     tema:"Tests",
     title:"Modern Best Practices for Testing in Java",
     nivel:"Iniciante",
     tipo:"Artigo",
     free:true
  },
  {
     id:18,
     link:"https://www.youtube.com/c/LinuxTips",
     tema:"Linux & Bash",
     title:"Canal Linux Tips",
     nivel:"Iniciante",
     tipo:"Canal do Youtube",
     free:true
  },
  {
     id:19,
     link:"https://www.kaggle.com/learn/python",
     tema:"Data Science",
     title:"Python",
     nivel:"Todos",
     tipo:"Curso",
     free:true
  },
  {
     id:20,
     link:"https://www.kaggle.com/learn/pandas",
     tema:"Data Science",
     title:"Pandas",
     nivel:"Todos",
     tipo:"Curso",
     free:true
  },
  {
     id:21,
     link:"https://www.kaggle.com/learn/intro-to-machine-learning",
     tema:"Data Science",
     title:"Machine Learning",
     nivel:"Iniciante",
     tipo:"Curso",
     free:true
  },
  {
     id:22,
     link:"https://www.kaggle.com/learn/intermediate-machine-learning",
     tema:"Data Science",
     title:"Machine Learning pt.2",
     nivel:"Intermediario",
     tipo:"Curso",
     free:true
  },
  {
     id:23,
     link:"https://www.kaggle.com/learn/time-series",
     tema:"Data Science",
     title:"Exercicio Machine Learning",
     nivel:"Intermediario",
     tipo:"Curso",
     free:true
  },
  {
     id:24,
     link:"https://www.kaggle.com/learn/data-visualization",
     tema:"Data Science",
     title:"Data Visualization",
     nivel:"Intermediario",
     tipo:"Curso",
     free:true
  },
  {
     id:25,
     link:"https://www.kaggle.com/learn/natural-language-processing",
     tema:"Data Science",
     title:"Natural Language Processing",
     nivel:"Intermediario",
     tipo:"Curso",
     free:true
  },
  {
     id:26,
     link:"https://www.coursera.org/learn/machine-learning",
     tema:"Data Science",
     title:"Machine Learning",
     nivel:"Avancado",
     tipo:"Curso",
     free:true
  },
  {
     id:27,
     link:"https://explore.skillbuilder.aws/learn",
     tema:"Cloud",
     title:"Intro AWS",
     nivel:"Todos",
     tipo:"Trilha",
     free:true
  },
  {
     id:28,
     link:"https://explore.skillbuilder.aws/learn/public/learning_plan/view/82/cloud-foundations-learning-plan?lp=cta&cta=intro",
     tema:"Cloud",
     title:"Cloud Foundations Learning Plan",
     nivel:"Iniciante",
     tipo:"Curso",
     free:true
  },
  {
     id:29,
     link:"https://explore.skillbuilder.aws/learn/public/learning_plan/view/84/developer-learning-plan?la=cta&cta=topbanner",
     tema:"Cloud",
     title:"Developer Learning Plan",
     nivel:"Iniciante",
     tipo:"Curso",
     free:true
  },
  {
     id:30,
     link:"https://www.youtube.com/watch?v=Rz7D51uU_gY&list=PLWNaqtzH6CWR-dykXeDD5XmMzJur9JBIh",
     tema:"Web",
     title:"VUE - O que Faremos",
     nivel:"Todos",
     tipo:"Canal do Youtube",
     free:true
  },
  {
     id:31,
     link:"https://www.udemy.com/course/java-curso-completo/",
     tema:"Java",
     title:"Java Completo",
     nivel:"Todos",
     tipo:"Curso",
     free:false
  },
  {
     id:32,
     link:"https://github.com/dylanaraps/pure-bash-bible",
     tema:"Bash",
     title:"Pure Bash Bible",
     nivel:"Todos",
     tipo:"Material de consulta",
     free:true
  },
  {
     id:33,
     link:"https://github.com/ryanmcdermott/clean-code-javascript",
     tema:"Javascript",
     title:"Clean code javascript",
     nivel:"Todos",
     tipo:"Material de consulta",
     free:true
  },
  {
     id:34,
     link:"https://www.webdesignerdepot.com/2013/08/10-css-selectors-you-shouldnt-code-without/",
     tema:"CSS",
     title:"10 CSS Selectors You Shouldn’t Code without",
     nivel:"Iniciante",
     tipo:"Material de consulta",
     free:true
  },
  {
     id:35,
     link:"https://origamid.com/projetos/flexbox-guia-completo/",
     tema:"CSS",
     title:"Guia CSS",
     nivel:"Iniciante",
     tipo:"Curso",
     free:true
  },
  {
     id:36,
     link:"https://goalkicker.com/",
     tema:"Geral",
     title:"Livros sobre programação",
     nivel:"Todos",
     tipo:"Livros",
     free:true
  },
  {
     id:37,
     link:"https://kubebyexample.com/",
     tema:"Kubernetes",
     title:"Kubernetes",
     nivel:"Iniciante",
     tipo:"Curso",
     free:true
  },
  {
     id:38,
     link:"https://www.udemy.com/course/learn-rabbitmq-asynchronous-messaging-with-java-and-spring/",
     tema:"Mensageria",
     title:"RabbitMQ",
     nivel:"Iniciante",
     tipo:"Curso",
     free:false
  },
  {
     id:39,
     link:"https://medium.com/dev-cave/rabbit-mq-parte-i-c15e5f89d94",
     tema:"Mensageria",
     title:"Artigo - RabbitMQ",
     nivel:"Iniciante",
     tipo:"Artigo",
     free:true
  }
]
export function roadmapFile() {
   return datas
}