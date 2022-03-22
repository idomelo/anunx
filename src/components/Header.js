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
              <Link passHref href='/'>
                Anunx
              </Link>
            </Typography>

            {/* Botão anunciar e vender OU Avatar do usuário */}

            <Box sx={{ flexGrow: 0, display:'flex' }}>
              {
                !session 
                  ? (
                    <Link passHref href='/auth/signin'>
                      <Button 
                        color="inherit" 
                        variant="outlined" 
                        sx={{ display: 'flex' }}
                      >
                        Anunciar e Vender
                      </Button>
                    </Link>
                  ) : <Button 
                        sx={{ marginLeft: 2 }} 
                        onClick={(e) => setAnchorUserMenu(e.currentTarget)}
                        size="medium" 
                        color="secondary" startIcon=
                        {
                          session.user.image
                            ? <Avatar src={session.user.image} />
                            : <AccountCircleIcon />
                        }>
                        {session.user.name}
                      </Button>
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