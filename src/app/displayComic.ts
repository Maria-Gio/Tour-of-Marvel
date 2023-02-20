import { heroImage } from './heroImage';
export interface displayComic{
  id:number,
  title: string,
  description:string,
  resourceURI:string,
  startYear:number,
  endYear:number,
  thumbnail: heroImage

}
