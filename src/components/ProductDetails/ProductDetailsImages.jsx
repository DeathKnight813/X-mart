import { useState } from 'react';
import styles from '../../pages/ProductDetails.module.css';

const ProductDetailsImages = ({ images }) => {
    const [activeImg, setActiveImg] = useState(0);

    return (
        <>
            <div className={styles.subimages_container}>
                {images.map((imgData, i) => (
                    <img
                        key={imgData.id}
                        src={imgData.url}
                        alt={imgData.filename}
                        className={`${i === activeImg ? styles.active : ''}`}
                        onClick={() => setActiveImg(i)}
                    />
                ))}
            </div>
            <div className={styles.product_img_container}>
                <img src={images[activeImg].url} alt={images[activeImg].filename} />
            </div>
        </>
    );
};

export default ProductDetailsImages;
