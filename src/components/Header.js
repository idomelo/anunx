import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

import {
  Container,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export default function ButtonAppBar() {
  const [ anchorUserMenu, setAnchorUserMenu ] = useState(false)
  const { data: session  } = useSession()

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'space-evenly'}}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>

            {/* Logotipo com link */}

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ cursor: 'pointer', flexGrow: 1, display: 'flex' }}
            >
              <Link passHref href='/' styles={{ textDecoration: 'none '}}>
                Anunx
              </Link>
            </Typography>

            {/* Botão anunciar e vender OU Avatar do usuário */}

            <Box sx={{ flexGrow: 0, display:'flex' }}>
              {
                session 
                ?(
                  <Button 
                  sx={{ marginLeft: 2 }} 
                  onClick={(e) => setAnchorUserMenu(e.currentTarget)}
                  size="large" 
                  color="secondary" startIcon=
                  {
                    session.user.image
                      ? <Avatar src={session.user.image} />
                      : <AccountCircleIcon size="large"/>
                  }>
                  {session.user.name}
                  </Button>
                ):(
                  <Link passHref href='/auth/signin'>
                    <Button 
                      color="inherit" 
                      variant="outlined" 
                      sx={{ display: 'flex' }}
                    >
                      Anunciar e Vender
                    </Button>
                  </Link>
                )
              }
            </Box>

            {/* Menu do Usuário */}

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
            >
              <Link passHref href="/user/dashboard">
                <MenuItem>Meus Anúncios</MenuItem>
              </Link>
              <Link passHref href="/user/publish">
                <MenuItem>Publicar Novo Anúncio</MenuItem>
              </Link>
              <Divider />
              <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>Sair</MenuItem>
            </Menu>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}