import {
  Card as CardMUI,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material'

export default function Card({ image, title, subtitle, actions}) {
  return (
    <CardMUI>
      <CardMedia
        image={image}
        sx={{ paddingTop: '56%'}}
        title={title}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography fontWeight="bold">
          {subtitle}
        </Typography>
      </CardContent>

      {
        actions
          ? (
            <CardActions>
              {actions}
            </CardActions>
          ) : null
      } 
    </CardMUI>
  )
}