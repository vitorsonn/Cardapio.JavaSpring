import "./card.css"
import Trash from "/home/sonn/cardapio/src/assets/trash.svg"
import { useFoodDataDelete} from "../../hooks/useFoodDelete"

interface CardProps{
    id: number,
    name: string,
    price: number

}

export function Card({id,name, price,}: CardProps){
    const {mutate}= useFoodDataDelete()

    const handleDelete = () => {
        if (window.confirm("Tem certeza que deseja excluir " + name + "?")) {
            mutate(id)
    }
    }

    return(
        <div className="card">
            <h2>{name}</h2>
            <p>Valor: {price} </p>
            <button className="btn-trash" onClick={handleDelete}><img src={Trash}/></button>
        </div>
    )
}