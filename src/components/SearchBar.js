import { useState } from 'react'
import { useRouter } from 'next/router'

import {
  IconButton,
  InputBase,
  Paper
} from "@mui/material"

import SearchIcon from '@mui/icons-material/Search'

export default function SearchBar() {
  const [ search, setSearch ] = useState()
  const router = useRouter()

  const handleSubmitSearch = () => {
    search &&
    (
      router.push({
        pathname: `/search/${search}`
      })
    )
  }

  return (
    <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mt: 3 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        fullWidth
        inputProps={{ 'aria-label': 'Ex.: Iphone 7 com garantia' }}
        placeholder="Ex.: Iphone 7 com garantia"
        onChange={(e) => setSearch(e.target.value)}
        autoComplete="on"
      />
      <IconButton sx={{ p: '10px' }} aria-label="search" onClick={handleSubmitSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}