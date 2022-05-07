function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
              <img src={props.image} />
            </div>
            <div class="usuario">
              {props.user}
            </div>
        </div>

    );
}

export default function Stories() {
    const arrayStories = [
        {
            image: "/assets/img/9gag.svg",
            user: "9gag"        
        },
        {
            image: "/assets/img/meowed.svg",
            user: "meowed"        
        
        },
        {
            image: "/assets/img/barked.svg",
            user: "barked"        
        },
        {
            image: "/assets/img/nathanwpylestrangeplanet.svg",
            user: "nathanwpylestrangeplanet"        
        },
        {
            image: "/assets/img/wawawicomics.svg",
            user: "wawawicomics"        
        },
        {
            image: "/assets/img/respondeai.svg",
            user: "respondeai"
        },
        {
            image: "/assets/img/filomoderna.svg",
            user: "filomoderna"        
        },
        {
            image: "/assets/img/memeriagourmet.svg",
            user: "memeriagourmet"        
        }
    ];

    return (
        <div class="stories">
            {arrayStories.map(item => (<Story image={item.image} user={item.user} />))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}