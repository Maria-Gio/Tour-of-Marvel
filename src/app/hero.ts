import { heroImage } from './heroImage';
export interface Hero {
  id: number,
  name: string,
  description: string,
  modified: Date,
  resourceURI: string,
  urls: string[],
  thumbnail: heroImage
  // urls:Array[Url],
}
