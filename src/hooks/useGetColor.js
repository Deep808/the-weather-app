import { useColor } from "color-thief-react";

const useGetColor = (
  bgImage,
  format = "hex",
  crossOrigin = "anonymous",
  quality = 10
) => {
  const { data, loading, error } = useColor(bgImage, format, {
    crossOrigin,
    quality,
  });
  return { color: data, loading, error };
};

export default useGetColor;
