import React, { useEffect } from 'react'
import Movie from './Movie'
import { api, api_key } from '../api'
import { useDispatch } from 'react-redux'
import  {fetchMovies} from '../redux/actions/movies'
import store from '../redux/store'

const Home = () => {

    const dispatch = useDispatch();
    const getMovies = async()=>{
        const res =  await api.get(`movie/popular?api_key=${api_key}`);
        dispatch(fetchMovies(res.data.results));
    }

    useEffect(()=>{
        getMovies();
    },[])

    // console.log(store)
  return (
    <div>
        <Movie/>
    </div>
  )
}

export default Home