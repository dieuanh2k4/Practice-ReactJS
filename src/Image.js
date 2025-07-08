import { useEffect, useState } from "react";

function Image() {
  const [img, setImg] = useState();

  useEffect(() => {
    return () => {
      img && URL.revokeObjectURL(img.preview);
    };
  }, [img]);

  const handlePreviewImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImg(file);
  };

  return (
    <div>
      <input type="file" onChange={handlePreviewImage} />
      {img && <img src={img.preview} alt="" width="80%" />}
    </div>
  );
}

export default Image;
