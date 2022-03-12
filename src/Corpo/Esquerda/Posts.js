export default function Posts(){
    const postsObj = [{
        owner: 'meowed',
        image: 'gato-telefone',
        liked: 'respondeai',
        qttLiked: '101.523'},
    {
        owner: 'barked',
        image: 'dog',
        liked: 'adorable_animals',
        qttLiked: '99.159'}
    ]

    return(
        <div class="posts">
            {postsObj.map(post => <Post owner = {post.owner} image = {post.image} liked = {post.liked} qttLiked = {post.qttLiked}/>)}   
        </div>
    )
}

function Post(props){
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                  <img src= {`assets/img/${props.owner}.svg`} alt={props.owner}/>
                  {props.owner}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={`assets/img/${props.image}.svg`} alt={props.image}/>
            </div>

            <div class="fundo">
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

                <div class="curtidas">
                    <img src={`assets/img/${props.liked}.svg`} alt={props.liked}/>
                    <div class="texto">
                        Curtido por <strong>{props.liked}</strong> e <strong>outras {props.qttLiked} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}