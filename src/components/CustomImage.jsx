import { useEffect, useState } from 'react';

const CustomImage = ({
  preview,
  mobile,
  tablet,
  desktop,
  alt,
  imageStyleClass,
  bgColor = 'transparent',
}) => {
  const [currentImage, setCurrentImage] = useState(preview);
  const [loading, setLoading] = useState(true);

  const fetchImage = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage(loadingImage.src);
      setLoading(false);
    };
  };

  useEffect(() => {
    let image;

    if (window.innerWidth < 768) {
      image = mobile;
    }
    if (window.innerWidth < 1020 && window.innerWidth > 768) {
      image = tablet;
    }
    if (window.innerWidth > 1020) {
      image = desktop;
    }

    fetchImage(image);
  }, [window.innerWidth]);

  return (
    <img
      style={{
        filter: `${loading ? 'blur(75px)' : ''}`,
        transition: '0.2s filter linear',
        width: '100%',
        background: bgColor,
      }}
      src={currentImage}
      alt={alt}
      className={imageStyleClass}
    />
  );
};
export default CustomImage;
