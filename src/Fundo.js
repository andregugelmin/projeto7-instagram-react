export default function Fundo(){

  const iconsNames = ['home', 'search-outline', 'add-circle-outline', 'heart-outline', 'person-outline']

  return(
    <div class="fundo-mobile">
      {iconsNames.map(icon => <ion-icon name={icon}></ion-icon>)}
    </div>
  )
}