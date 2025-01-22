
const getCroppedImageUrl = (url: string) => {
   if(!url) return '';
   const target = 'media/';
   const index = url.indexOf(target) + target.length; // musimy dodac "crop/600/400" za media/ 
   return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;