import React from "react";

function TopoPost(props) {
    return (
        <div class="topo">
            <div class="usuario">
              <img src={props.image} />
              {props.user}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

function Conteudo(props) {
    const initialLike = "heart-outline";
    const [like, setLike] = React.useState(initialLike);

    function likeIcon() {
        if(like === initialLike){
            setLike('heart');
            document.querySelector(".post .fundo .acoes ion-icon:first-of-type").classList.add("like");
        } else {
            setLike('heart-outline');
            document.querySelector(".post .fundo .acoes ion-icon:first-of-type").classList.remove("like");
        }
    }

    function likePost() {
        setLike("heart");
        document.querySelector(".post .fundo .acoes ion-icon:first-of-type").classList.add("like")
    }

    return (
        <div class="fundo">
            <div class="conteudo">
                <img src={props.imagePost} onClick={likePost} />
            </div>

            <div class="acoes">
               <div>
                <ion-icon name={like} onClick={likeIcon}></ion-icon>
                 <ion-icon name="chatbubble-outline"></ion-icon>
                 <ion-icon name="paper-plane-outline"></ion-icon>
               </div>
               <div>
                 <ion-icon name="bookmark-outline"></ion-icon>
               </div>
            </div>

            <div class="curtidas">
                <img src={props.imageLike} />
                <div class="texto">
                  Curtido por <strong>{props.userLike}</strong> e <strong>outras {props.count} pessoas</strong>
                </div>
            </div>
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
            curtidaUser: "respondeai",
            contagemLikes: "101.523"
        },
        {
            userImage: "assets/img/barked.svg",
            userName: "barked",
            postImage: "assets/img/dog.svg",
            curtidaImage: "assets/img/adorable_animals.svg",
            curtidaUser: "adorable_animals",
            contagemLikes: "99.159"
        }
    ];
    
    return (
        <div class="posts">
            {
                arrayPosts.map(
                    item => (
                        <div class="post">
                        <TopoPost image={item.userImage} user={item.userName}/>
                        <Conteudo imagePost ={item.postImage} imageLike={item.curtidaImage} userLike={item.curtidaUser} count={item.contagemLikes}/>
                        </div>
                    )
                )
            }
        </div>
    );
}