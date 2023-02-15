import { heroImage } from './heroImage';
import { comic } from './comic';
import { series } from './series';
export interface Hero {
  id: number,
  name: string,
  description: string,
  modified: Date,
  resourceURI: string,
  urls: string[],
  thumbnail: heroImage,
  comics: comic,
  series: series,
  // urls:Array[Url],
}
