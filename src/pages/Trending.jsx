import React, { useContext} from 'react'
import TopMenu from '../components/Navbar/Navbar'
import SideMenu from '../components/SideMenu/SideMenu';
import {Gifscontext} from '../context/GifsContext';


const Trending = () => {
  const { trendingGif } = useContext(Gifscontext)
  
  const gifs = Array.from(trendingGif)

  const content = 
    gifs.map(e => {
      return (
        <a key={e.id} href={e.images.original.url} >
        <img className='cover'id={e.id} alt={e.title} src={e.images.original.url}  />
        </a>
        )
    })
  
  return (
    <>
    <TopMenu />
    <div className='container'>
      <SideMenu/>
      <div className='flex-container'>
        {content}
      </div>
    </div>
    </>
  )
}

export default Trending