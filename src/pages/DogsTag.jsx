import React, { useContext} from 'react'
import TopMenu from '../components/Navbar/Navbar'
import SideMenu from '../components/SideMenu/SideMenu'
import { Tagscontext } from '../context/TagsContext'

const DogsTag = () => {
    const { dogsTag } = useContext(Tagscontext)

    const dogsGifs = Array.from(dogsTag)
    
    const content =
        dogsGifs.map(e => {
            return (
                <a key={e.id} href={e.images.original.url} >
                    <img className='cover' id={e.id} alt={e.title} src={e.images.original.url} />
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
export default DogsTag