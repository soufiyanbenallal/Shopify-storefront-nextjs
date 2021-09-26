import React from 'react';
import Lightbox from 'react-image-lightbox';
 
 
export default function LightboxComponent  ({images,index,setisOpen}) {
    const [photoIndex, setphotoIndex] = React.useState(index)
    // const [isOpen, setisOpen] = React.useState(open)
 
    React.useEffect(() => {
      console.log('====================================');
      console.log("its work");
      console.log('====================================');
    }, [])
    return (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setisOpen( false )}
            onMovePrevRequest={() => setphotoIndex( (photoIndex + images.length - 1) % images.length) }
            onMoveNextRequest={() => setphotoIndex( (photoIndex + 1) % images.length)
            }
          />
    );
}