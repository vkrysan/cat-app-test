import Image from 'next/image';

const SideImages = () => {
  return (
    <div className="side-images">
      <div className="image-column">
        {[...Array(14)].map((_, i) => (
          <Image key={i} src={`/images/cat-bg.png`} width={100} height={100} alt={`Cat ${i + 1}`} className="image" />
        ))}
      </div>
      <div className="image-column">
        {[...Array(14)].map((_, i) => (
          <Image key={i} src={`/images/cat-bg.png`} width={100} height={100} alt={`Cat ${i + 1}`} className="image" />
          
        ))}
      </div>

    </div>
  );
};

export default SideImages;
