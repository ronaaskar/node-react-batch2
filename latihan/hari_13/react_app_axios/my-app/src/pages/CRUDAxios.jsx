import axios from 'axios'
import { useState, useEffect } from 'react';


function CRUDAxios(){ 
const [data,setdata] = useState ({})
const [year, setYear] = useState ("")
const [title, setTitle] = useState ("")
const [categoryID, setCategoryID] = useState ("")
const [dataMovie, setDataMovie] =useState ([])
const [dataCategory, setDataCategory] =useState ([])
const [Id, setId] =useState ([])
const [categoryId, setCategoryId] =useState ([])
  // const ()

  useEffect (() => {
    fetchDataCategory()
    fetchDataMovie()
  },[])
  


  const fetchDataCategory= () => {
    axios.get('http://localhost:3000/api/category').then ((respon) => {
      let result = respon.data.info
      setDataCategory(result)
      console.log(respon)
  }).catch(err => {
    console.log(err)
  })
  }



  const fetchDataMovie= () => {
    axios.get('http://localhost:3000/api/movie').then ((respon) => {
      let result = respon.data.info
      setDataMovie(result)
      console.log(respon)
  }).catch(err => {
    console.log(err)
  })
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
    console.log(title)
  }

  const handleYearChange = (event) => {
    setYear(event.target.value)
    console.log(year)
  }

  const handleCategoryChange = (event) => {
    setCategoryID(event.target.value)
    console.log(categoryID)
  }



const handleSubmit = async (event) => {
  event.preventDefault()
  try{
    let txtSimpan ="Apa Anda Yakin Menyimpan Data"
    let txtUpdate ="Apa Anda Yaknin Memperbaharui Data"

    if(id){
      if(confirm(txtSimpan)),{
        await axios.put{"http://localhost:3000/api/movie/S{id}", {
          title: title,
          year: Number(year),
          categoryId: Number(categoryId) 
         }}}
    
        } else{
          if(confirm(txtSimpan)) {
            await axios.post{"http://localhost:3000/api/movie", {
            title: title,
            year: Number(year),
            categoryId: Number(categoryId) 
         }}}  
            
         
    await axios.post('http://localhost:3000/api/movie', {
    title:title,
    year:Number(year),
    categoryId:Number(categoryID)
  })


  fetchDataMovie()
  fetchDataCategory()
  }catch(err){
  alert(err.message)
  }
  }
  }



const handleEdit = async (id) => {
    try{
    axios.get("http://localhost:3000/api/movie/$(id)").then ((respon), {
    let result = respon.data.info
    console.log(result)
    setTitle(result.title)
    setYear(result.year)
    setCategoryId(result.categoryId)
    setId(result.Id)
  })}catch(err) {
    console.log(err)
  }
   
  }

  fetchDataMovie()
  fetchDataCategory()
  catch(err){
  alert(err.message)
  }
  
  


  return ( 
  <>
  <h1> CRUD AXIOS </h1>;

<form onSubmit={handleSubmit}>
  <label for="title">Movie Title</label>
  <input type="text" id="title" name="title" onChange={handleTitleChange} value={title} placeholder="Movie title"></input>

  <label for="year">Realeased Year</label>
  <input type="number"  id="year" name="years" onChange={handleYearChange} value={year} placeholder="Released Movie Year"></input>

  <label for="categoryId">Category Name</label>
  <select id="categoryId" name="categoryID" onChange={handleCategoryChange}>
          {dataCategory.map((item,index) => {
                return (
                  <option key={index} selected={item.id === item.id} value={item.id}> {item.name} </option>
              )
              })}
     </select> 
  <input type="submit" value="Submit" classname="btn btn-neutral mt-4"></input>
        
</form>

<table>
  <thead>     
  <tr>           
    <th>Nomor</th>
    <th>Judul</th>
    <th>Tahun</th>
    <th>Katagori</th>
  </tr>
  </thead>
  
  <tbody>
     {dataMovie.map((item, index)=>{
        return(
          <tr key={index}>
              <td>{index+1}</td>
              <td>{item.title}</td>
              <td>{item.year}</td>
              <td>{item.categoryId}</td>
          </tr>
        )
        })}
  </tbody>
  </table> 


<div classname="overflow-x-auto">
<table className="table table-zebra">

  <thead>     
  <tr>           
    <th>Nomor</th>
    <th>Judul</th>
    <th>Tahun</th>
    <th>Katagori</th>
  </tr>
  </thead>


  
  <tbody>
     {dataMovie.map((item, index)=>{
        return(
          <tr key={index}>
              <td>{index+1}</td>
              <td>{item.title}</td>
              <td>{item.year}</td>
              <td>{item.categoryId}</td>
              <td>input type="submit" value="ubah" className="btn btn-warning" onClick={()=>handleEdit(item.id)}</td>
              <td>input type="submit" value="ubah" className="btn btn-error"</td>
          </tr>
        )
        })}
        
  </tbody>
  
  </table> 
  
</div>

</>
  ) 
 

export default CRUDAxios