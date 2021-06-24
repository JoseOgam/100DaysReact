import { useState } from "react";
const Form = (props) => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    

    const submit = (e)=>{
    e.preventDefault()
    setData([...data, {name,email,phone}])
  }
    return (
        <div>
            <h4>{props.title}</h4>
            <form onSubmit={submit}>
                <input onChange={(e)=>setName(e.target.value)} value={name} placeholder='name' />
                <input onChange={ (e) => setEmail(e.target.value) } value={ email } placeholder='email' />
                <input onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder='phone' />
                <button>submit</button>
             </form>
        
    </div>)
}
export default Form;