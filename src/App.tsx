import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFood';
import { CreateModal } from './components/create-modal/create-modal';

function App() {

  const {data} = useFoodData()
  const [IsModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }


  return (

    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData =>
          <Card key={foodData.id}
            id={foodData.id !}
            name={foodData.name}
            price={foodData.price} />)}
      </div>
      {IsModalOpen && <CreateModal closeModal={handleOpenModal}/>}
          <button onClick={handleOpenModal} className='btn-send'>Novo</button>
    </div>
    
  )
}

export default App
