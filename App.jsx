import { useEffect, useState } from "react"
import FirstCompo from "./FirstCompo";



function App() {
  const [categories, setCategories] = useState([])

  const [loading, setLoading] = useState(false)

  function showData(){
    setLoading(true)
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(data=>data.json())
    .then(data=>{
      setCategories(data.categories)
      setLoading(false)
    })
    .catch(err=>console.log(err))
    
  }

  function hidden(){
    setCategories([])
  }

  return (
    <div>
      <h1> Hello Class : {categories.length}</h1>

      <button onClick={showData}> SHOW </button>
      <button onClick={hidden}> HIDE </button>
      <div>
        <h4>Show data with id name : </h4>
      </div>
      {
        loading ? <p>loading data...</p> : categories.map(catagory => <FirstCompo key = {catagory.idCategory} data={catagory}></FirstCompo>)
      }
    </div>

  )
}

export default App