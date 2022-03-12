import Esquerda from "./Esquerda/Esquerda";
import Sidebar from "./Sidebar";

export default function Corpo(){
    return(
    <div class="corpo">
        <Esquerda/>
        <Sidebar userImgPath = "assets/img/catanacomics.svg" userPage = "catanacomics" username = "Catana"/>        
    </div>
    )
}