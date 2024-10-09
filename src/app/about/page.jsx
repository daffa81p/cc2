'use client';
import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function About() {
  // Step 1: Create an array of slide objects
  const slides = [
    {
      id: 1,
      imgSrc:
        "https://s7d2.scene7.com/is/image/Caterpillar/CM20231027-068ce-0c12f",
      title: "1920s - The Merger and a New Company",
      description:
        "1925: The Holt Manufacturing Company and the C. L. Best Tractor Co. merge to form Caterpillar Tractor Co. C. L. Best is appointed first Chairman 1927: Caterpillar designs its first new product: the Model Twenty Tractor 1928: Caterpillar makes its first acquisition by purchasing Russell Grader Manufacturing Company",
      buttons: ["Explore", "Gallery"],
    },
    {
      id: 2,
      imgSrc:
        "https://s7d2.scene7.com/is/image/Caterpillar/CM20231027-4d377-74acd",
      title: "1930s - Decade of innovation",
      description:
        "1931: Caterpillar begins producing its first diesel engine, an industry first: the D9900.1931: Caterpillar changes the standard color of its machines from gray with red trim to “Hi-Way Yellow” with black trim.1936: Caterpillar track-type tractors help build the Hoover Dam.1937: Caterpillar machines help complete construction of the Golden Gate Bridge.",
      
    },
    {
      id: 3,
      imgSrc:
        "https://s7d2.scene7.com/is/image/Caterpillar/CM20240110-294a8-40986",
      title: "2000s - beyond the yellow iron",
      description:
        "2001: Caterpillar introduces its ACERT® technology.2006: Caterpillar acquires Progress Rail Services, Inc.2008: Caterpillar introduces the first, one-of-a-kind electrically driven track-type tractor: the D7E.2008: Caterpillar acquires Shandong SEM Machinery Co., Ltd. in China",
      
    },
    {
        id: 4,
        imgSrc:
          "https://s7d2.scene7.com/is/image/Caterpillar/CM20240110-c6961-140a4",
        title: "2010s - Rail,Mining, and Beyond",
        description:
          "2010: Caterpillar acquires Electro-Motive Diesel, Inc.2011: Caterpillar acquires Bucyrus International, Inc. and MWM GmbH.2017: Jim Umpleby is appointed CEO and assumes Chairman of the Board in 2018.2018: Caterpillar introduces the world's first high drive electric drive dozer - the Cat® D6 XE.",
      },
      {
        id: 5,
        imgSrc:
          "https://s7d2.scene7.com/is/image/Caterpillar/CM20240108-c5f04-2de62",
        title: "2020s - History is still being made",
        description:
          "2021: Caterpillar releases its first diversity and inclusion report,     The Power of Everyone - Building a Better World.2022: Caterpillar announces a successful demonstration of its first battery electric 793 large mining truck.",
      },
  ];

  return (
    <Carousel className="pb-0">
      {/* Step 3: Map through the slides array to generate each slide */}
      {slides.map((slide) => (
        <div key={slide.id} className="relative h-full w-full">
          <img src={slide.imgSrc} alt={`image ${slide.id}`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                {slide.title}
              </Typography>
              <Typography variant="lead" color="white" className="mb-12 opacity-80">
                {slide.description}
              </Typography>

              </div>
            </div>
          </div>
      ))}
    </Carousel>
  );
}
