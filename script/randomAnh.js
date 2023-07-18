const imageIds = [
  "hcm-image-1",
  "hcm-image-2",
  "hcm-image-3",
  "hcm-image-4",
  "dalat-image-1",
  "dalat-image-2",
  "dalat-image-3",
  "dalat-image-4",
  "hoian-image-1",
  "hoian-image-2",
  "hoian-image-3",
  "hoian-image-4",
  "hanoi-image-1",
  "hanoi-image-2",
  "hanoi-image-3",
  "hanoi-image-4",
  "halong-image-1",
  "halong-image-2",
  "halong-image-3",
  "halong-image-4",
];

const hcmImgPaths = [];
const daLatImgPaths = [];
const hoiAnImgPaths = [];
const haNoiImgPaths = [];
const haLongImgPaths = [];

for (let i = 1; i <= 30; i++) {
  const hcmImagePath = `./img/gallery/hcm/${i}.jpg`;
  hcmImgPaths.push(hcmImagePath);

  const daLatImagePath = `./img/gallery/dalat/${i}.jpg`;
  daLatImgPaths.push(daLatImagePath);

  const hoiAnImagePath = `./img/gallery/hoian/${i}.jpg`;
  hoiAnImgPaths.push(hoiAnImagePath);

  const haNoiImagePath = `./img/gallery/hanoi/${i}.jpg`;
  haNoiImgPaths.push(haNoiImagePath);

  const haLongImagePath = `./img/gallery/halong/${i}.jpg`;
  haLongImgPaths.push(haLongImagePath);
}

const imagePaths = {
  "hcm": hcmImgPaths,
  "dalat": daLatImgPaths,
  "hoian": hoiAnImgPaths,
  "hanoi": haNoiImgPaths,
  "halong": haLongImgPaths,
};

for (const imageId of imageIds) {
  const imageLocation = imageId.split("-")[0];
  const imagePathsForLocation = imagePaths[imageLocation];

  const randomIndex = Math.floor(Math.random() * imagePathsForLocation.length);
  const randomImagePath = imagePathsForLocation[randomIndex];

  const img = document.getElementById(imageId);
  img.src = randomImagePath;
  imagePathsForLocation.splice(randomIndex, 1);
}
