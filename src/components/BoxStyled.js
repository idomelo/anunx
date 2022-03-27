import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  padding: theme.spacing(3),
  boxShadow: 'rgb(153 153 153 / 20%) 0px 2px 4px 0px',
}))

export default BoxStyled
