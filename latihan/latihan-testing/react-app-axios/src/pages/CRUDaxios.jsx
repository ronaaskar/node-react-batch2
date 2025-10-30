import axios from 'axios';
import { useEffect, useState } from 'react';

function CRUDaxios(){
    // const initialInput = {title:"",year:0,categoryId:null, id:null}
    const [dataMovie, setDataMovie] =  useState([]);
    const [dataCategory, setDataCategory] =  useState([]);
    // const [input, setInput] = useState({initialInput})
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [id, setId] = useState('')
    const [categoryId, setCategoryId] = useState('')


    useEffect(()=>{
        fetchDataMovie()
        fetchDataCategory()
        
    },[])

    const fetchDataMovie = () => {
        axios.get('http://localhost:3000/api/movie').then((response) => {
            setDataMovie(response.data.movies)
            console.log(response.data.movies)
        }).catch(err => {
            console.log(err)
        })
    }

    const fetchDataCategory = () => {
        axios.get('http://localhost:3000/api/category').then((response) => {
            let result = response.data.info
            setDataCategory(result)
        }).catch(err => {
            console.log(err)
        })
    }

    // const handleChange = (event) => {
    //     let {name, value} = event.target
    //     setInput({...input, [name]:value})
    // }

    // const handelSubmit = async (event) =>{
    //     event.preventDefault()
    //     try{
    //         await axios.post('http://localhost:3000/api/movie', {title: input.title, year:Number(input.year), categoryId:Number(input.categoryId)})
    //         fetchDataMovie()
    //         fetchDataCategory()
    //         console.log(input)
    //         setInput({...input})
    //     }catch(err){
    //         alert(err)
    //     }
    // }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
        console.log(title)
    }

    const handleYearChange = (event) => {
        setYear(event.target.value)
        console.log(year)
    }

    const handleCategoryIdChange = (event) => {
        setCategoryId(event.target.value)
        console.log(categoryId)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
        let txtSimpan = "Apa Anda yakin Menyimpan Data???"
        let txtUpdate = "Apa Anda yakin Memperbaharui Data???"
        
        if(id){
            if(confirm(txtUpdate)){
            await axios.put(`http://localhost:3000/api/movie/${id}`, {
            title: title,
            year: Number(year),
            categoryId: Number(categoryId)
            })}
        }else{
            if(confirm(txtSimpan)){
            await axios.post('http://localhost:3000/api/movie', {
            title: title,
            year: Number(year),
            categoryId: Number(categoryId)
            })}
        }
        fetchDataMovie()
        fetchDataCategory()
        hapusData()
        }catch(err){
            alert(err)
        }
    }

    const hapusData = () => {
        setTitle('')
        setYear('')
        setCategoryId('')
        setId('')
    }


    const handleEdit = async (id) => {
                try{
            axios.get(`http://localhost:3000/api/movie/${id}`).then((response) => {
            let result = response.data.info
            console.log(result)
            setTitle(result.title)
            setYear(result.year)
            setCategoryId(result.categoryId)
            setId(result.id)
        })}catch(err)  {
            console.log(err)
        }
        }
        
    


    return(
        <>
        <h1>MOVIES</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
            <label for="tile" className='label'>Movie Title</label>
            <input className="input" type="text" id="title" name="title" onChange={handleTitleChange} value={title} placeholder="Movie Title.." />

            <label for="year" className='label'>Realeased Year</label>
            <input className="input" type="number" id="year" name="year" onChange={handleYearChange} value={year} placeholder="Movie Release Date.." min="1980" max="2025"/>

            <label for="categoryId" className='label'>Category</label>
            <select value={categoryId} className="select select-neutral" id="categoryId" name="categoryId" onChange={handleCategoryIdChange}>
                {dataCategory.map((item,index)=>{
                    return(
                        <option key={index} value={item.id}>{item.name}</option>
                    )
                })}
            </select>
            
            <input type="submit" value="Submit" className='btn btn-neutral mt-4' />
        </form>
        </div>
        </div>

        <div className="overflow-x-auto">
        <table className='table table-zebra'>
            <thead>
                <tr>
                    <th>Nomor</th>
                    <th>Judul</th>
                    <th>Tahun</th>
                    <th>Kategori</th>
                    <th colSpan="2">Aksi</th>
                </tr>
            </thead>

            <tbody>
                {dataMovie.map((item, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.year}</td>
                            <td>{item.category.name}</td>
                            <td><input type="submit" value="Ubah" className='btn btn-warning' onClick={()=>handleEdit(item.id)}/></td>
                            <td><input type="submit" value="Hapus" className='btn btn-error'/></td>
                        </tr>
                )
                })}
            </tbody>
        </table>
        </div>
        </>    
    )
}

export default CRUDaxios