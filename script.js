//your JS code here. If required.
const images = [
  { url: 'https://picsum.photos/id/237/200/300' },
  { url: 'https://picsum.photos/300' },
  { url: 'https://picsum.photos/400' },
  // { url: 'https://picsum.photos/500' },
  // { url: 'https://picsum.photos/600' }
];

const outputDiv = document.getElementById('output');

function downloadImages() {
  Promise.all(images.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
      img.src = image.url;
    });
  })).then(images => {
    // All images have been downloaded successfully
    images.forEach(image => {
      outputDiv.appendChild(image);
    });
  }).catch(error => {
    // At least one image failed to download..
    console.error(error);
  });
}

const downloadButton = document.getElementById('download-images-button');
downloadButton.addEventListener('click', downloadImages);
