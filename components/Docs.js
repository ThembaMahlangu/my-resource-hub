import { FaGithub } from 'react-icons/fa';

export default function Docs() {
  return (
    <div className="bg-gray-100 p-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Welcome to Themba's Resource Hub Documentation</h1>
        <p className="text-lg mt-4">
          Explore our collection of resources for web developers. Save time with our customizable Next.js components.
        </p>
      </div>
      
      <div className="my-8 text-center">
        <a
          href="https://github.com/ThembaMahlangu/my-resource-hub.git"
          className="text-blue-500 hover:underline"
        >
          View on GitHub <FaGithub className="inline-block text-xl" />
        </a>
      </div>

      <section className="my-8 text-center">
        <h2 className="text-3xl font-bold">How to Use This Website</h2>
        <p className="text-lg mt-4">
          Themba's Resource Hub is a treasure trove for web developers. Our components can be effortlessly tailored to your Next.js project, saving you valuable time.
        </p>
      </section>

      <section className="my-8 text-center">
        <h2 className="text-3xl font-bold">Using Our Components</h2>
        <p className="text-lg mt-4">
          Employing our components is a breeze. Just copy and paste the code into your Next.js app. Feel free to modify the components to align with your specific requirements.
        </p>
      </section>

      <section className="my-8 text-center">
        <h2 className="text-3xl font-bold">Contributing to Our GitHub Repository</h2>
        <p className="text-lg mt-4">
          Your contributions are highly appreciated! You can enhance the repository by adding new components or refining existing ones for improved design and scalability. Please note that we have two branches on GitHub: 'main' and 'contributions'. The latter is for those who wish to contribute and send merge requests. Each request will undergo review and approval.
        </p>
      </section>
    </div>
  );
}
