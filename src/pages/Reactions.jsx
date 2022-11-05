import React, {useContext} from 'react'
import { Gifscontext } from '../context/GifsContext'
import TopMenu from '../components/Navbar/Navbar'
import SideMenu from '../components/SideMenu/SideMenu'

const Reactions = () => {
  const { reactions } = useContext(Gifscontext)
  
  const reactionsGifs = Array.from(reactions)

  const content = 
  reactionsGifs.map(e => {
      return (
        <img className='cover' key={ e.id } id={ e.id } alt={ e.title } src={ e.images.original.url }  />
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

export default Reactions