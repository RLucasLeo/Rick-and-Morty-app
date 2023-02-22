import Card from '../Card/Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div style={{display: "flex", justifyContent: "space-between"}}>
         {
            characters.map(({name, species, gender, image})=>{
               return <Card 
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={()=> window.alert("Emulamos que se cierra la card")}
               />
            })
         }
      </div>)
}
