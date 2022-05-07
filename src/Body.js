import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar" 

function Esquerda() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );
}

export default function Body() {
    return (
        <div class = "corpo">
            <Esquerda />
            <Sidebar />
        </div>
    );
}