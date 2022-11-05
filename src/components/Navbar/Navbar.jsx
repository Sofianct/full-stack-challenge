import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { Image, Navbar, Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import UploadForm from './UploadForm';


const TopMenu = () => {
  return (
    <>
      <Navbar maxWidth={"fluid"} className="navbar" css={{ color: 'white' }}>
        <Navbar.Brand>
          <Image css={{marginLeft: '0.2rem'}} src='/Giffy-removebg-preview.png' width={70}/>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          <Link to="/" className='nav-link'>
              Dashboard
          </Link>
          <Link to="/trending" className='nav-link'>
              Trending
          </Link>
          <Link to="/reactions" className='nav-link'>
              Reactions
          </Link>
        </Navbar.Content>
        <Navbar.Content>
          {/* <Text weight='semibold' color='whitesmoke' css={{ textAlign: 'center' }}>Welcome back, Sofia!</Text> */}
          <Navbar.Item>
            <Button
              style={{ textDecoration: 'none' }}
              color="success"
              auto
              flat
              as={Link}
              to={'/upload'}
            >
              Upload
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
       
  )
}

export default TopMenu