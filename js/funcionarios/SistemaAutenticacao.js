export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
        /*
        essa linha verifica se existe alguma instancia de uma chave chamada "autenticar" dentro do 
        parametro que passamos, e se essa instancia é tipo Function,  se tiver, ela retorna True e o 
        metodo estatico Login pode  
        */
    }
}