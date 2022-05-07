import Stories from "./Stories";
import Posts from "./Posts";

function Esquerda() {
    return (
        <Stories />
    );
}

function SideBar() {}

export default function Body() {
    return (
        <div class = "corpo">
            <Esquerda />
            <SideBar />
        </div>
    );
}