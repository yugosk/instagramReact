
function Usuario() {
    const usuarioLogado = [{
        userImage: "assets/img/catanacomics.svg",
        userName: "catanacomics",
        name: "Catana"
    }];

    return (
        usuarioLogado.map(
            item => (
                <div class="usuario">
                    <img src={item.userImage} />
                    <div class="texto">
                      <strong>{item.userName}</strong>
                      {item.name}
                    </div>
                </div>  
            )
        )
    );
}

function TituloSugestoes() {
    return (
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    );
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
              <img src={props.image} />
              <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">{props.razao}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

function Sugestoes() {
    const arraySugestoes = [
        {
            image: "assets/img/bad.vibes.memes.svg",
            nome: "bad.vibes.memes",
            razao: "Segue você"
        },
        {
            image: "assets/img/chibirdart.svg",
            nome: "chibirdart",
            razao: "Segue você"
        },
        {
            image: "assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar",
            razao: "Novo no Instagram" 
        },
        {
            image: "assets/img/adorable_animals.svg",
            nome: "adorable_animals",
            razao: "Segue você"
        },
        {
            image: "assets/img/smallcutecats.svg",
            nome: "smallcutecats",
            razao: "Segue você"
        }
    ];

    return (
        <div class="sugestoes">
            <TituloSugestoes />
            {arraySugestoes.map(
                item => (
                    <Sugestao image={item.image} nome={item.nome} razao={item.razao}/>
                )
            )}
        </div>
    );
}

function Links() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    );
}

function Copyright() {
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}

export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    );
}