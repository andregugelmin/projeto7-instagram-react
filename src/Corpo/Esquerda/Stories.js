export default function Stories(){
    const storiesObj = 
    [   { image: '9gag', imagePath: 'assets/img/9gag.svg'},
        { image: 'meowed', imagePath: 'assets/img/meowed.svg'},
        { image: 'barked', imagePath: 'assets/img/barked.svg'},
        { image: 'nathanwpylestrangeplanet', imagePath: 'assets/img/nathanwpylestrangeplanet.svg'},
        { image: 'wawawicomics', imagePath: 'assets/img/wawawicomics.svg'},
        { image: 'respondeai', imagePath: 'assets/img/respondeai.svg'},
        { image: 'filomoderna', imagePath: 'assets/img/filomoderna.svg'},
        { image: 'memeriagourmet', imagePath: 'assets/img/memeriagourmet.svg'}]

    return(
        <div class="stories">
			{storiesObj.map(story => <Story imagePath={story.imagePath} image = {story.image}/>)}

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props){
    return(
        <div class="story">
                <div class="imagem">
                    <img src={props.imagePath} alt={props.image}/>
                </div>
                <div class="usuario">
                    {props.image}
                </div>
        </div>
    )
}