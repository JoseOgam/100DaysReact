import { useState } from "react";
import Form from './component/Form'

function App(props) {
  const [count, setCount] = useState(0)
  


  const handleAdd = () => {
    setCount(() => {
      return (
        count + 1
      )
    })
  }
  const handleRemove = () => {
    setCount(() => {
      return (
        count - 1
      )
    })
  }
  const handleReset = () => {
    setCount(() => {
      return (
        0
      )
    })
  }
  // useEffect(() => {
  //   return () => {
  //     console.log('i render once')
  //   }
  // })

  const title = 'form basic concept'
  
  return (
    <div className="App">
      <h3>Hi my name is { props.name }</h3>
      <h2>count is { count }</h2>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleRemove}>remove</button>
      <button onClick={ handleReset }>reset</button>
      
      <Form  title={title}/>

    </div>
  );
}

export default App;
