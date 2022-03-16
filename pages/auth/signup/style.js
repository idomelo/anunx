import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

export const BoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.background.white,
  padding: theme.spacing(3),
  marginTop: 8,
  boxShadow: 'rgb(153 153 153 / 20%) 0px 2px 4px 0px',

  [theme.breakpoints.down('md')]: {
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
    padding: 0,
  },
}))