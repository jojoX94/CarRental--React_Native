declare module '@hauvo/react-native-360-image-viewer' {
  type Image360ViewerProps = {
    width?: number; // Width of the image
    height?: number; // Height of the image
    srcset?: string[]; // Array of image sources
    rotationRatio?: number; // Drag distance compared to 180 degrees: width / rotationRatio = 180 degrees
  };

  const Image360Viewer: React.FC<Image360ViewerProps>;

  export default Image360Viewer;
}
