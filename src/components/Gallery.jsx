import ImageCard from "./imageCard";
import imageData from "../data/imageData";

function Gallery() {
  return (
    <>
      <div className="gallery">
        {imageData.map((image) => (
          <ImageCard
            key={image.id}
            imageUrl={image.imageUrl}
            title={image.title}
            description={image.description}
          />
        ))}
      </div>
    </>
  );
}

export default Gallery;
