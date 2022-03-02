import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

export const BoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.background.white,
  padding: theme.spacing(3),
  marginTop: 8,
  boxShadow:' 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
}))