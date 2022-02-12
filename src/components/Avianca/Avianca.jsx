import React, { Fragment, useState } from 'react';
import Swal from 'sweetalert2';
import './Avianca.scss'

const Avianca = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErros] = useState({name:"", email:"", phone: "", age: ""})

  const submitForm = (e) => {
    e.preventDefault();

    let errorCount = 0;
    if (name===''){
      errorCount++
      setErros((prevState)=>{
        return {...prevState, name:'Se requiere tu nombre completo'}
      })
    } else {
      setErros((prevState) => {
        return {...prevState, name:''}
      })
    }
    if (email===''){
      errorCount++
      setErros((prevState)=>{
        return {...prevState, email:'Se requiere tu correo'}
      })
    } else {
      setErros((prevState) => {
        return {...prevState, email:''}
      })
    }
    if (phone===''){
      errorCount++
      setErros((prevState)=>{
        return {...prevState, phone:'Se requiere tu número telefónico'}
      })
    } else if(email.length<7) {
      errorCount++
      setErros((prevState) => {
        return {...prevState, phone:'Tu número telefónico debe tener 10 digitos'}
      })
    } else {
      setErros((prevState) => {
        return {...prevState, phone:''}
      })
    }
    if (age===''){
      errorCount++
      setErros((prevState)=>{
        return {...prevState, age:'Se requiere tu edad'}
      })
    }  else if(email.length<17) {
      errorCount++
      setErros((prevState) => {
        return {...prevState, age:'Tu edad debe ser mayor a 18 años'}
      })
    } else {
      setErros((prevState) => {
        return {...prevState, age:''}
      })
    }
    if(errorCount===0){
      //console.log(name, email, phone, age);
      const formdata = {name, email, phone, age}
      console.log(formdata)
      setName("");
      setEmail("");
      setPhone("");
      setAge("");
      Swal.fire({
       position: "center",
       icon: "success",
       title: "Tu información fue enviada con éxito, estaremos en contacto contigo",
       showConfirmButton: false,
       allowOutsideClick: false,
       timer: 5000,
      });
   }
  }


  return (
    <Fragment>

    <div className="containerAvi">
      <form onSubmit={submitForm} className="formContainer">
        <div className='info'>
        <h1 className='Titulo'>
          ¡Hola, bienvenido! 
        </h1>
        <p>
          Sabemos que quieres viajar en Avianca, por favor diligencia el siguiente formulario:
        </p>
        </div>
        <div className="divider">
          <div className="form">

            <div className="field">
              <label>Nombre:</label>
              <input type="text"
                     name="name"
                     placeholder='Escribe tu nombre completo'
                     pattern="^[a-zA-Z ]*$"
                     value={name} 
                     onChange={(e) => setName(e.target.value)}
                     className="inputForm"
                     maxLength={60}
                     autoFocus
              />
            </div>
            {errors.name && <p className='validationText'>{errors.name}</p>}

            <div className="field">
              <label>Correo:</label>
              <input type="email"
                     name="email"
                     placeholder='ejemplo@email.com'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="inputForm"
                     maxLength={40}
              />
            </div>
            {errors.email && <p className='validationText'>{errors.email}</p>}

            <div className="field">
              <label>Número Telefónico:</label>
              <input type="tel"
                     name="phone"
                     placeholder='Escribe tu número telefónico'
                     pattern="^[0-9]+"
                     value={phone} 
                     onChange={(e) => setPhone(e.target.value)}
                     className="inputForm"
                     maxLength={10}
              />
            </div>
            {errors.phone && <p className='validationText'>{errors.phone}</p>}

          <div className='field'>
            <label>Selecciona tu edad:</label>
              <input type="number"
                     name="age"
                     placeholder='Escribe tu edad (dentro de 18 a 100 años)'
                     min={18}
                     max={100}
                     pattern="[0-9]{0,10}"
                     value={age} 
                     onChange={(e) => setAge(e.target.value)}
                     className="inputForm"
                     maxLength={3}
              />
          </div>
          {errors.age && <p className='validationText'>{errors.age}</p>}
          
          <div className='button'>
            {Object.values(name && email && phone && age).join("").length === 0 ? (
            <button
              type="submit"
              className="btn btn-info btn-rounded"
            >
              Submit
            </button>
          ) : (
            <button
              type="submit"
              onClick={submitForm}
              className="btn btn-info btn-rounded"
            >
              Submit
            </button>
          )}
          </div>

          </div>
        </div>
      </form>
    </div>
    </Fragment>

  )
}

export default Avianca