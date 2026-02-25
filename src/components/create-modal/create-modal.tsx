import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodMutate"
import { FoodData } from "../../interface/FoodData"
import "./modal.css"


interface InputProps{
    label: string,
    value: string | number,
    updateValue(value:any): void
}


interface ModalProps{
    closeModal(): void
}


const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)} />

        </>
    )
}



export function CreateModal({closeModal}: ModalProps) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const {mutate, isSuccess,} = useFoodDataMutate()

    const submit = () => {
        const foodData: FoodData = {
            name,
            price
        }

        mutate(foodData)
    }

    useEffect(() => {
        if(isSuccess){
            closeModal()
        }
    }, [isSuccess])


    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre seu novo item no cardapio</h2>
                <form className="input-container">
                    <Input label="name" value={name} updateValue={setName}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                </form>
        <button onClick={submit} className="btn-submit">Enviar</button>
                
            </div>
            
        </div>
    )
}