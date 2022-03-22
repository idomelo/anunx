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
        sx={{ paddingTop: '56%', backgroundSize: 'contain', backgroundColor: 'primary.main'}}
        title={title}
      />
      <CardContent>
        <Typography variant="subtitle1" component="h2">
          {title}
        </Typography>
        <Typography fontWeight="bold" variant="body2">
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