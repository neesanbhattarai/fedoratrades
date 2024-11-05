import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center py-10">
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          About <span className="text-orange-500">Us</span>
        </h1>
      </div>

      {/* Introduction Section */}
      <p className="mt-6 text-gray-600 text-lg leading-relaxed mx-auto max-w-4xl">
        Welcome to Fedora Trades, where we transform your space with extraordinary painting and flooring services. Our dedicated team of expert floor finishers and painters is committed to delivering exceptional quality and precision. We take great pride in our ability to enrich any environment with finishes that are not only visually captivating but also enduring. With a heartfelt commitment to detail and a passion for excellence, we bring your vision to life, continually exceeding your expectations. Trust Fedora Trades to elevate your project with artistry and sophistication, creating spaces that truly resonate.
      </p>

      {/* Our Account Section */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800 mx-auto max-w-4xl">Our Account:</h2>
      <p className="text-gray-600 text-lg leading-relaxed mx-auto max-w-4xl">
        Fedora Trades was established by three enthusiastic tradespeople with the goal of providing outstanding flooring and painting services that go above and beyond for their customers. Having worked on several residential and commercial projects, we have perfected our expertise to guarantee that every task is finished to the greatest possible standards.
      </p>

      {/* Why Choose Us Section */}
      <h2 className="mt-8 text-xl font-semibold text-gray-800 mx-auto max-w-4xl">Why choose Us:</h2>
      <ul className="list-disc list-inside text-gray-600 text-lg mx-auto max-w-4xl">
        <li>
          <strong>Expertise & Skill:</strong> We ensure excellent results on every project by bringing a wealth of knowledge and practical expertise to bear.
        </li>
        <li>
          <strong>Attention to Detail:</strong> We take great satisfaction in our painstaking attention to detail and dedication to fine craftsmanship.
        </li>
        <li>
          <strong>Customer-Centric Approach:</strong> We put the needs of our customers first. We pay attention to your demands and personalise our offerings to provide outcomes you'll be happy with.
        </li>
        <li>
          <strong>Dependability:</strong> We respect your time and work hard to finish each project on time so as not to interfere too much with your day-to-day activities.
        </li>
      </ul>

      {/* Responsive Banner Section */}
      <div className="relative mt-10 h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/freeQuoteBanner.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-20"></div> {/* Dark overlay */}
      </div>
    </div>
  );
}
