const express = require('express');
const nunjucks = require('nunjucks')

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

const server = express();

//Configurar nunjucks (template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

// Start do Servidor
server
    .use(express.urlencoded({ extended: true }))
    // Configurar arquivos estáticos
    .use(express.static("public"))
    //Rotas
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5500)
