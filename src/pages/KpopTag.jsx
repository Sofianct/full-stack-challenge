import React, { useContext} from 'react'
import TopMenu from '../components/Navbar/Navbar'
import SideMenu from '../components/SideMenu/SideMenu'
import { Tagscontext } from '../context/TagsContext'

const KpopTag = () => {
    const { kpopTag } = useContext(Tagscontext)
    console.log(Tagscontext)

    const kpopGifs = Array.from(kpopTag)
    
    const content =
        kpopGifs.map(e => {
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
export default KpopTag