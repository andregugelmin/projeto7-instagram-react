export default function Sidebar(props){

  const sugestionsObjs = [
    { name: "bad.vibes.memes", imgPath: "assets/img/bad.vibes.memes.svg", description: "Segue você"},
    { name: "chibirdart", imgPath: "assets/img/chibirdart.svg", description: "Segue você"},
    { name: "razoesparaacreditar", imgPath: "assets/img/razoesparaacreditar.svg", description: "Novo no Instagram"},
    { name: "adorable_animals", imgPath: "assets/img/adorable_animals.svg", description: "Segue você"},
    { name: "smallcutecats", imgPath: "assets/img/smallcutecats.svg", description: "Segue você"},
  ]

  return(
      <div class="sidebar">
        <div class="usuario">
          <img src={props.userImgPath} alt={props.userPage}/>
          <div class="texto">
            <strong>{props.userPage}</strong>
            {props.username}
          </div>
        </div>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
			    {sugestionsObjs.map(sugestion => <Sugestion imgPath={sugestion.imgPath} name = {sugestion.name} description = {sugestion.description}/>)}
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
  )
}

function Sugestion(props){
  return(
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imgPath} alt={props.name}/>
        <div class="texto">
          <div class="nome">{props.name}</div>
          <div class="razao">{props.description}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
  
}