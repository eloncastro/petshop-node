// Importa dependências
const http = require("http");
const petshop = require("./petshop");
const url = require("url");

const server = http
    .createServer((req, res) => {

        res.writeHead(200, {"Content-Type": "text/plain; charset=UTF-8"});
        let urlCompleta = url.parse(req.url, true);
        let queryString = urlCompleta.query; // parâmetros
        let rota = urlCompleta.pathname; // ex: pets/add

        //console.log(queryString);

        switch(rota){
            case "/pets":
                let conteudo = petshop.listarPets();
                res.write((conteudo.length > 0) ? conteudo : "nenhum pet cadastrado");
                break;
            case "/pets/add":
                let novoPet = queryString;
                if(typeof(novoPet.nome) != "undefined"){
                    if(petshop.adicionarPet(novoPet)){
                        res.write(`${novoPet.nome} foi adicionado com sucesso à nossa lista!`);
                    }else{
                        res.write('Não foi possível salvar o pet.');
                    }
                }else{
                    res.write('Nenhum pet informado para entrada ao petshop.');
                }
                break;
            case "/pets/buscar":
                let nomePet = queryString.nome;
                if(typeof(nomePet) != "undefined"){
                    if(petshop.buscarPet(nomePet)){
                        res.write(`pet encontrado`);
                    }else{
                        res.write(`Tadinho do pet.. SUMIU`);
                    }
                }else{
                    res.write('Nenhum pet informado para busca em nosso cadastro.');
                }
                break;
            default:
                res.write("Tô perdido");
        }
        res.end();
    })
    .listen(3000, "localhost",() => {
        console.log("Servidor rodando :)");
    });
