'use client'
import NavBar from "../components/navbar";


const Works = () =>{

    const monasteries = ["Gnadak Monastery, Namchi","Pemayangtse Monastery, Pelling","Allay Monastery, Ravangla","Boomtar Monastery, Namchi","Tashi Choling Monastery, Ladakh","Tashi Choling Monastery, Khechuperi","Manang Monastery, Manang, Nepal","Ghurpisay Kangso Lhagang, Namchi","Marble Chorten stupa, Swayambhu, Nepal","Various other Chortens in Swayambhu, Nepal","Tinchulae Monastery, Tinchulae, Nepal","Khechuperi Old Monastery, Khechuperi","Tushal Monastery, Boudha, Nepal"]
    type ListProps = {
        list: string[];
      }
      
      const ListDuotone:React.FC<ListProps>=({list})=>list.map((item, index) => {
        
        return (
          <li key={index}>{item}</li>
        );
      })

    return(
        <><NavBar /><div>hello</div></>
    )
}

export default Works;