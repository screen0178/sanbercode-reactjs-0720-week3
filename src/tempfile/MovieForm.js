import React, {useContext, useState} from "react"
import {MovieContext} from "./MovieContext"

const MovieForm = () =>{
//   const [name, setName] = useState("")
//   const [lengthOfTime, setLengthOfTime] = useState(0)
  const [movie, setMovie, lengthOfTime, setLengthOfTime ,name, setName] = useContext(MovieContext)

  const handleSubmit = (event) =>{
    event.preventDefault()
    setMovie([...movie, {name, lengthOfTime}])
    setName("")
    setLengthOfTime("")
  }
  const handleChangeName = (event) =>{
    setName(event.target.value)
  }

  const handleChangeTime = (event) =>{
    setLengthOfTime(event.target.value)
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChangeName} />
        <input type="number" value={lengthOfTime} onChange={handleChangeTime} />
        <button>submit</button>
      </form>
    </>
  )

}

export default MovieForm