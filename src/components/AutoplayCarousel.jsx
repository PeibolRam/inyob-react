import "../styles/Autoplay.css";
import CarouselItem from "./CarouselItem";
import Empresa1 from '../assets/images/Empresa1.png'
import Empresa2 from '../assets/images/Empresa2.png'
import Empresa3 from '../assets/images/Empresa3.png'
import Empresa4 from '../assets/images/Empresa4.png'
import Empresa5 from '../assets/images/Empresa5.png'
import Empresa6 from '../assets/images/Empresa6.png'
import Empresa7 from '../assets/images/Empresa7.png'
import Empresa8 from '../assets/images/Empresa8.png'
import Empresa9 from '../assets/images/Empresa9.png'
import Empresa10 from '../assets/images/Empresa10.png'

export default function AutoplayCarousel() {
  const logos = [
    {
      imgUrl: `${Empresa1}`,
      title: "Text 1"
    },
    {
      imgUrl: `${Empresa2}`,
      title: "Text 2"
    },
    {
      imgUrl: `${Empresa3}`,
      title: "Text 3"
    },
    {
      imgUrl: `${Empresa4}`,
      title: "Text 4"
    },
    {
      imgUrl: `${Empresa5}`,
      title: "Text 5"
    },
    {
      imgUrl: `${Empresa6}`,
      title: "Text 6"
    },
    {
      imgUrl: `${Empresa7}`,
      title: "Text 7",
    },
    {
      imgUrl: `${Empresa8}`,
      title: "Text 8",
    },
    {
      imgUrl: `${Empresa9}`,
      title: "Text 9",
    },
    {
      imgUrl: `${Empresa10}`,
      title: "Text 10",
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