import * as React from 'react'
import {
  Box,
  CircularProgress,
  Button,
} from '@mui/material'
import {  green } from '@mui/material/colors'

const ButtonLoading = ({text, loading, onClick }) => {
  return (
    <Box sx={{position: 'relative', mt: 3, mb: 2 }}>
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={loading}
        onClick={onClick}
      >
        {text}
      </Button>
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            color: green[500],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}
        />
      )}
    </Box>
  )
}

export default ButtonLoading