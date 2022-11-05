import { Text } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  return (
    <div className='side-menu'>
      <Text weight='bold' css={{marginBottom: '1rem'}} color='#b2acac'>Tags: </Text>
      <Link to='/kpop' className='urls'>
        #kpop
      </Link>
      <Link to='/dogs' className='urls'>
        #dogs
      </Link>
      <Link to='/money' className='urls'>
        #money
      </Link>
    </div>
  )
}

export default SideMenu