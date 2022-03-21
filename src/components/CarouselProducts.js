import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

export default function CarouselProducts({ productFiles }) {
  const CarouselProps = {
    showIndex: false,
    showBullets: true,
    infinite: true,
    showThumbnails: true,
    showFullscreenButton: false,
    showGalleryFullscreenButton: false,
    showPlayButton: false,
    showGalleryPlayButton: false,
    showNav: true,
    isRTL: false,
    slideOnThumbnailOver: false,
    thumbnailPosition: 'right',
    useWindowKeyDown: true,
  }

  const images = []

  productFiles.map(file => (
    images.push({
      original: `/uploads/${file.name}`,
      thumbnail: `/uploads/${file.name}`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      thumbnailHeight: 70,
    })
  ))

  return (
    <section className='appGallery'>
      <ImageGallery
        items={images}
        infinite={CarouselProps.infinite}
        showBullets={CarouselProps.showBullets}
        showFullscreenButton={CarouselProps.showFullscreenButton && CarouselProps.showGalleryFullscreenButton}
        showPlayButton={CarouselProps.showPlayButton && CarouselProps.showGalleryPlayButton}
        showThumbnails={CarouselProps.showThumbnails}
        showIndex={CarouselProps.showIndex}
        showNav={CarouselProps.showNav}
        isRTL={CarouselProps.isRTL}
        thumbnailPosition={CarouselProps.thumbnailPosition}
        slideOnThumbnailOver={CarouselProps.slideOnThumbnailOver}
        additionalClass="app-image-gallery"
        useWindowKeyDown={CarouselProps.useWindowKeyDown}
      />
    </section>
  )
}