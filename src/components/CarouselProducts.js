import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

export default function CarouselProducts({ productFiles }) {
  const CarouselProps = {
    showIndex: false,
    showBullets: true,
    infinite: true,
    showThumbnails: true,
    showFullscreenButton: true,
    showGalleryFullscreenButton: true,
    showPlayButton: false,
    showGalleryPlayButton: false,
    showNav: true,
    isRTL: false,
    slideOnThumbnailOver: false,
    thumbnailPosition: 'bottom',
    useWindowKeyDown: true,
  }

  const images = []

  productFiles.map(file => (
    images.push({
      original: file.url,
      thumbnail: file.url,
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