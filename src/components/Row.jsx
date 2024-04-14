import axios from "axios"
import React, { useEffect, useState } from "react"
import Movie from "./Movie"
import {MdChevronLeft,MdChevronRight} from "react-icons/md"

const Row=({title,fetchURL,rowId})=>{
    const [movies,setmovies]=useState([])
   

    useEffect(()=>{
        axios.get(fetchURL)
        .then((respone)=>{
            setmovies(respone.data.results)
        })
    },[fetchURL])
    console.log(movies)

    const sideLeft=()=>{
        var slider=document.getElementById('slider'+rowId)
        slider.scrollLeft=slider.scrollLeft - 500
    }

    const sideRight=()=>{
        var slider=document.getElementById('slider'+rowId)
        console.log("ividvidjfidjfidjfjdifjdjf")
        console.log(slider)
        slider.scrollLeft=slider.scrollLeft + 500
    }

    return (
        <>
            <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
            <div className="relative flex items-center group">
                <MdChevronLeft onClick={sideLeft} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
            <div id={'slider'+rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative ">
                    {movies?.map((item,id)=>(
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <MdChevronRight onClick={sideRight} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
            </div>
        </>
    )
}

export default Row  