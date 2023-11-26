import "../styles/Autoplay.css";
// import { logos } from "../utils/carousel-config";
import CarouselItem from "./CarouselItem";
import LogoInyob from '../assets/images/LogoInyob.png'

export default function AutoplayCarousel() {
  const logos = [
    {
      imgUrl: `${LogoInyob}`,
      title: "Text 1"
    },
    {
      imgUrl: `${LogoInyob}`,
      title: "Text 2"
    },
    {
      imgUrl: `${LogoInyob}`,
      title: "Text 3"
    },
    {
      imgUrl: `${LogoInyob}`,
      title: "Text 4"
    },
    {
      imgUrl: `${LogoInyob}`,
      title: "Text 5"
    },
    {
      imgUrl: `${LogoInyob}`,
      title: "Text 6"
    },
    {
      imgUrl: `${LogoInyob}`,
      title: "Text 7",
    }
  ]

  return (
    <div className="carousel-container-autoplay">
      <div className="carousel-track">
        {Object.keys(logos).map((detailKey) => {
          return (
            <CarouselItem
              key={detailKey}
              imgUrl={logos[detailKey].imgUrl}
              imgTitle={logos[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(logos).map((detailKey) => {
          return (
            <CarouselItem
              key={detailKey}
              imgUrl={logos[detailKey].imgUrl}
              imgTitle={logos[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}