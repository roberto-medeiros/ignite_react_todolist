import '../Global.css'
import'./Logo.css'
import'./Header.css'

export function InputTask () {
  return (
    <div className="textarea">
       <input 
        placehouder="Adicione uma nova tarefa"
        type="text"
        name="task"
        className="input"
        />

        <button type="submit" className="btn-header">Criar
        <img src="./src/components/assets/plus.svg"/>
        </button>
        
  </div>
 )   
}