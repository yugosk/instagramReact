function Logo() {
    return (
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
        </div>
    );
}

function LogoMobile() {
    return (
        <div>
            <div class="logo-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <div class="instagram-mobile">
                <img src="assets/img/logo.png" />
            </div>    
        </div>
    );
}

function Searchbar() {
    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    );
}

function Icons() {
    return (
        <div class="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
 
    );
}

function IconsMobile() {
    return (
    <div class="icones-mobile">
        <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
    );
}

export default function Navbar() {
    return (
    <div class="container">
        <Logo />
        <LogoMobile />
        <Searchbar/>
        <Icons />
        <IconsMobile />
    </div>
    );
}