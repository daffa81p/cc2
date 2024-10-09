import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";

const sections = [
  {
    title: "Built For Customer Success",
    description:
      "We are in it for the long haul—for our customers and for our world. Our customers can be found in virtually every corner of the earth, and we realize our success comes directly from helping our customers be successful.",
  },
  {
    title: "Built For Transforming Lives",
    description:
      "We take seriously our responsibility to give back to the communities in which we work and live. The Caterpillar Foundation, founded in 1952, is helping to make sustainable progress possible around the world through support of environmental sustainability, access to education and fulfillment of basic human needs.",
  },
  {
    title: "Built For The Future",
    description:
      "We have a long history of innovation and using leading edge technology to provide customer solutions. Whether we're researching ways to move more dirt with less fuel, developing products that generate fewer emissions or exploring autonomous vehicle solutions, our strength is integrating customer feedback with ideas and actions to ensure our customers' success. Now and in the future.",
  },
];

const products = [
  {
    title: "Attachment",
    description:
      "Attachments tailor Cat machines to the specific requirements of a customer's working needs. Caterpillar Attachments enhance the productivity and utility of Caterpillar machines...",
    imgSrc:
      "https://s7d2.scene7.com/is/image/Caterpillar/CM20160625-35533-05223",
    alt: "Attachment",
  },
  {
    title: "Equipment",
    description:
      "Cat equipment sets the standard for our industry. The Cat product line of more than 300 machines reflects our increased focus on customer success. We will remain the leader by ...",
    imgSrc:
      "https://s7d2.scene7.com/is/image/Caterpillar/CM20190709-ab04f-a35bc",
    alt: "Peralatan",
  },
  {
    title: "Power Systems",
    description:
      "Wherever you are and whatever your business, Cat® power systems have been meeting your most critical needs and matching the world’s most stringent standards...",
    imgSrc:
      "https://s7d2.scene7.com/is/image/Caterpillar/CM20160804-32975-45925",
    alt: "Sistem Daya",
  },
];
const testimonials = [
  {
    logo: "https://www.hubspot.com/hubfs/WW_(rebrand)_logo_2018%20(3)-1.png",
    tittle: "CEO, Example Corp",
    description: "This product has transformed our business. It’s easy to use and very efficient!"
  },
  {
    logo: "https://www.hubspot.com/hubfs/SANDLER_Wordmark_2%20Color_SM-3.webp",
    tittle: "Marketing Manager, ABC Inc.",
    description: "Amazing experience! The support team was helpful and the features are top-notch."
  },
  {
    logo: "https://www.hubspot.com/hubfs/WW_(rebrand)_logo_2018%20(3)-1.png",
    tittle: "Product Manager, XYZ Ltd.",
    description: "The platform saved us a lot of time. I highly recommend it for anyone looking to streamline their workflow."
  }
];
export default function Home() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://s7d2.scene7.com/is/image/Caterpillar/CM20210629-ac2d9-eb21f)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center w-full flex justify-start px-[3rem]">
          <div className="w-full h-30 flex flex-col items-start justify-start">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white text-left">
              Making Sustainable <br /> Progress Possible
            </h1>
            <p className="mb-5"></p>
            <div className="w-60 h-2 bg-yellow-500"></div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-16 grid grid-cols-2">
        <section className="col-span-2">
          <h2 className="text-4xl font-bold text-gray-800 ">About The Company</h2>
          <h2 className="w-20 h-2 bg-yellow-500"></h2>
          <p className="text-gray-700 mb-6">
            Caterpillar is the world's leading manufacturer of construction and mining equipment, diesel and natural gas engines, industrial turbines and diesel-electric locomotives. We are also a leading financial services provider through Caterpillar Financial Services.
          </p>
        </section>

        {/* Render cards based on sections array */}
        <div className="md:grid-cols-2 gap-8 px-10">
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h3>
              <p className="text-gray-700">{section.description}</p>
            </div>
          ))}
        </div>

        <div>
          <Image
            src="https://s7d2.scene7.com/is/image/Caterpillar/C838677"
            className="rounded-md shadow-md w-full h-fit"
            alt="CAT Logo"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      {/* Produk Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">PRODUCTS</h1>
        <hr className="w-1/4 mx-auto my-8 border-yellow-400" />
        <p className="text-lg text-center">
        The Cat equipment product line, consisting of more than 300 machines, has become the standard for our industry. We are ready to help meet all your needs with our equipment, with our product distribution and support systems, and continuous product introductions and updates.
        </p>
      </div>

      {/* Render Product Cards */}
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 border border-gray-300 shadow-lg rounded-lg overflow-hidden bg-white"
            >
              <div className="relative h-48">
                <Image
                  src={product.imgSrc}
                  alt={product.alt}
                  width={1000}
                  height={1000}
                  className="object-cover h-52"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                <p className="text-lg leading-relaxed mb-8">
                  {product.description}
                </p>
                <Link href="/products" className="text-lg text-lg font-bold text-blue-600 hover:text-blue-700 cursor-pointer">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center py-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8">Our Customers testimonials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {testimonials.map((card, index) => (
          <Card
            key={index}
            logo={card.logo}
            title={card.title}
            description={card.description}
            tags={card.tags}
          />
        ))}
      </div>
    </div>
    </main>
  );
}

