function AcoesTopo() {
    return (
        <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    );
}

function TopoPost(props) {
    return (
        <div class="topo">
            <div class="usuario">
              <img src={props.image} />
              {props.user}
            </div>
            <AcoesTopo />
        </div>
    );
}

function Conteudo(props) {
    return (
        <div class="conteudo">
            <img src={props.image} />
        </div>
    );
}

function AcoesFundo() {
    return (
        <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    );
}

function Curtidas(props) {
    return (
        <div class="curtidas">
            <img src={props.image} />
            <div class="texto">
              Curtido por <strong>{props.user}</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
        </div>
    );
}

function Fundo(props) {
    return (
        <div class="fundo">
            <AcoesFundo />
            <Curtidas image={props.image} user={props.user}/>
        </div>
    );
}

export default function Posts() {
    const arrayPosts = [
        {
            userImage: "assets/img/meowed.svg",
            userName: "meowed",
            postImage: "assets/img/gato-telefone.svg",
            curtidaImage: "assets/img/respondeai.svg",
            curtidaUser: "respondeai"
        },
        {
            userImage: "assets/img/barked.svg",
            userName: "barked",
            postImage: "assets/img/dog.svg",
            curtidaImage: "assets/img/adorable_animals.svg",
            curtidaUser: "adorable_animals"
    
        }
    ];
    
    return (
        <div class="posts">
            {
                arrayPosts.map(
                    item => (
                        <div class="post">
                        <TopoPost image={item.curtidaUser} user={item.curtidaUser}/>
                        <Conteudo image ={item.postImage}/>
                        <Fundo image={item.curtidaImage} user={item.curtidaUser}/>
                        </div>
                    )
                )
            }
        </div>
    );
}