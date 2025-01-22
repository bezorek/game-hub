import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

const getCroppedImageUrl = (url: string) => {
   if(!url) return noImage;
   const target = 'media/';
   const index = url.indexOf(target) + target.length; // musimy dodac "crop/600/400" za media/ 
   return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;