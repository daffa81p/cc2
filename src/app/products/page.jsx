import Head from 'next/head';

const attachmentsModels = [
  { name: "Adapters", image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20190328-bce77-07cd4?$cc-s$" },
  { name: "Augers", image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20231020-bb1e2-5a97d?$cc-s$" },
  { name: "Backhoes", image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20200428-b7eb6-43959?$cc-s$" },
  { name: "Bale Grabs", image: "https://s7d2.scene7.com/is/image/Caterpillar/C10564377?$cc-s$" },
];

// Data for models in the "Equipment" section
const equipmentModels = [
  { name: "Articulated Trucks", image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20210429-d9417-b0b02?$cc-s$" },
  { name: "Asphalt Pavers", image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20211221-28487-cbb1b?$cc-s$" },
  { name: "Backhoe Loaders", image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20200206-d8c01-57333?$cc-s$" },
  { name: "Cold Planers", image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20200206-43545-32720?$cc-s$" },
];

// Data for models in the "Power Systems" section
const powerModels = [
  { name: "Electric Power", image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20160804-32975-45925?$cc-s$" },
  { name: "Industrial", image: "https://s7d2.scene7.com/is/image/Caterpillar/C831337?$cc-s$" },
  { name: "Marine Power Systems", image: "https://s7d2.scene7.com/is/image/Caterpillar/C828264?$cc-s$" },
  { name: "Oil and Gas", image: "https://s7d2.scene7.com/is/image/Caterpillar/C833664?$cc-s$" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Power Systems</title>
      </Head>

      {/* Power Systems Header Section */}
      <header className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Power Systems</h1>
        <p className="text-lg text-gray-700 mb-10">
          Wherever you are and whatever your business, Cat® power systems have been meeting your most critical needs
          and matching the world’s most stringent standards. For more than 85 years we’ve been powering the industries
          and businesses that communities rely on. And with 5 to 5,720 kW, we’re equipped to power today and built to
          power tomorrow.
        </p>
      </header>

      {/* Power Systems Models Section */}
      <section className="max-w-7xl mx-auto px-4 ">
      <h2 className="text-2xl font-bold mb-6">Power Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {powerModels.map((model, index) => (
              <div key={index} className="border p-4 rounded-lg shadow hover:shadow-md transition duration-300">
                <img src={model.image} alt={model.name} className="h-40 w-full object-contain mb-4" />
                <h3 className="text-xl font-semibold text-center">{model.name}</h3>
              </div>
          ))}
        </div>
      </section>

      {/* Equipment Section */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <h1 className="text-4xl font-bold mb-4">Equipment</h1>
          <p className="text-lg text-gray-700 mb-10">
            Cat equipment sets the standard for our industry. The Cat product line of more than 300 machines reflects our increased focus on customer success. We will remain the leader by continuing to help our customers meet their needs with durable and reliable heavy equipment. Caterpillar has the best distribution and product support system in any capital goods industry.
          </p>

          {/* Equipment Models Section */}
          <h2 className="text-2xl font-bold mb-6">Equipment Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentModels.map((model, index) => (
              <div key={index} className="border p-4 rounded-lg shadow hover:shadow-md transition duration-300">
                <img src={model.image} alt={model.name} className="h-40 w-full object-contain mb-4" />
                <h3 className="text-xl font-semibold text-center">{model.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Attachments</h1>
        <p className="text-lg text-gray-700 mb-10">
          Attachments tailor Cat machines to the specific requirements of a customer’s working needs. Caterpillar Attachments enhance the productivity and utility of Caterpillar machines, equipping them for a wide range of tasks and operating requirements, and providing total system solutions for any job application.
        </p>

        {/* Attachments Models Section */}
        <h2 className="text-2xl font-bold mb-6">Models</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attachmentsModels.map((model, index) => (
            <div key={index} className="border p-4 rounded-lg shadow hover:shadow-md transition duration-300">
              <img src={model.image} alt={model.name} className="h-40 w-full object-contain mb-4" />
              <h3 className="text-xl font-semibold text-center">{model.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
