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
  const [ anchorUseMenu, setAnchorUserMenu ] = useState(false)
  const { data: session  } = useSession()

  const openUserMenu = Boolean(anchorUseMenu)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>
            <Link passHref href={
              session ? '/user/publish' : '/auth/signin'
            }>
              <Button color="inherit" variant="outlined">Anunciar e Vender</Button>
            </Link>

            {
              session 
                ? (
                  <Button sx={{ marginLeft: 2 }} onClick={(e) => setAnchorUserMenu(e.currentTarget)}
                    size="medium" 
                    color="secondary" startIcon={
                      session.user.image
                        ? <Avatar src={session.user.image} />
                        : <AccountCircleIcon />
                  }>
                    {session.user.name}
                  </Button>

                ) : null
            }


            <Menu
              anchorEl={anchorUseMenu}
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