export const STORAGE_LINK = "https://additionals.summitersclub.com";

export const getImageUrl = (imageName: string) => {
  return STORAGE_LINK + "/images/" + imageName;
};

// export const getImageUrl = (imageName: string, folderName: string) => {
//   return STORAGE_LINK + "/images/" + folderName + "/" + imageName;
// };

// example:
// const amadablamBackgroundImage = getImageUrl('amadablamBackgroundImage.webp)
// you should create this image variables in index.ts file which is in images folder.
// you should name image variables exactly like it already is.
// example: first variable from index.ts
//before:
// export { default as mountaintImage } from "./mountain.jpg";
//after:
// export const mountainImage = getImageUrl('mountain.webp)
