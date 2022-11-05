import React, {useContext} from 'react'
import TopMenu from '../components/Navbar/Navbar'
import SideMenu from '../components/SideMenu/SideMenu'
import {Gifscontext} from '../context/GifsContext'

const Dashboard = () => {
  const { userGifs } = useContext(Gifscontext)
  
  const gifs = Array.from(userGifs)

  const content = 
    gifs.map(e => {
      return (
        <img className='cover' key={ e.id } id={ e.id } alt={ e.title } src={ e.url }  />
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

export default Dashboard