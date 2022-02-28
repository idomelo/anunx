import React, { useState } from 'react'
import Link from 'next/link'

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

  const openUserMenu = Boolean(anchorUseMenu)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>
            <Link href="/user/publish">
              <Button color="inherit" variant="outlined">Anunciar e Vender</Button>
            </Link>

            <Button sx={{ marginLeft: 2 }} onClick={(e) => setAnchorUserMenu(e.currentTarget)}
              size="medium" 
              color="secondary" startIcon={
                true === false
                  ? <Avatar src="" />
                  : <AccountCircleIcon />
            } >
              Ido F. Melo
            </Button>

            <Menu
              anchorEl={anchorUseMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
            >
              <Link href="/user/dashboard">
                <MenuItem>Meus Anúncios</MenuItem>
              </Link>
              <Link href="/user/publish">
                <MenuItem>Publicar Novo Anúncio</MenuItem>
              </Link>
              <Divider />
              <MenuItem>Sair</MenuItem>
            </Menu>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}