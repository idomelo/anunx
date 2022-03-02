import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

export const Dropzone = styled(Box)(({ error, theme }) => ({
  display: 'flex',
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: 200,
  height: 150,
  margin: '0 10px 10px 0',
  backgroundColor: theme.palette.background.default,
  border: `2px dashed ${error ? "red" : "black"}`,
}))

export const Thumb = styled(Box)(() => ({
  position: 'relative',
  width: 200,
  height: 150,
  backgroundSize: 'cover',
  margin: '0 15px 15px 0',
  backgroundPosition: 'center center',

  '&:hover .mask': {
    display: 'flex',
  },

  '& .mainImage': {
  position: 'absolute',
  backgroundColor: 'blue',
  padding: '6px 10px',
  bottom: 0,
  left: 0,
  }
}))

export const Mask = styled(Box)(() => ({
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)'
}))