const AboutPage = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        About the project
      </h2>

      <p className="text-gray-900 text-jg mb-6 leading-relaxed">
        <strong>BookingApp</strong> The app offers a smooth and intuitive
        booking flow. Users can quickly fill out a simple form and get instant
        access to hotel options without any distractions. Fast response, clean
        design, and clear navigation make the experience easy and efficient on
        both desktop and mobile devices.
      </p>

      <p className="text-gray-900 text-jg mb-6 leading-relaxed">
        This project was developed as part of a front-end learning journey, with
        a strong focus on applying real-world development principles. It's built
        to reflect scalable architecture, maintainable code structure, and
        reusable components — not just to function, but to serve as a solid
        foundation for future growth and development.
      </p>

      <h3 className="text-xl font-semibold text-yellow-400 mb-3">
        🛠️ Tech Stack:
      </h3>
      <ul className="list-disc list-inside text-gray-900 text-base mb-6 space-y-1">
        <li>
          ⚡️<strong>React + Vite</strong> - fast, modern tooling
        </li>
        <li>
          🔘<strong>React Router</strong> - with{" "}
          <code>createBrowserRouter</code>
        </li>
        <li>
          🎨<strong>TailwindCSS</strong> - fully dark-themed UI
        </li>
        <li>
          📡<strong>Axios + json-server</strong> - fake REST API
        </li>
        <li>
          📋<strong>react-hook-form </strong> - elegant form handing
        </li>
        <li>
          🔡<strong>ESlint + Prettier</strong> - keeping code clean & consistent
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-yellow-400 mb-3">
        🎯Why this project matters{" "}
      </h3>
      <p className="text-gray-900 text-lg mb-6 leading-relaxed">
        This project bridges the gap between theory and practice. It’s not just
        about writing code — it’s about building a real, functional product
        using modern tools and workflows. It helps develop problem-solving
        skills, architectural thinking, and a strong foundation for real-world
        front-end development.
      </p>

      <h3 className="text-xl font-swmibold text-yellow-400 mb-3">👩‍💻 Author</h3>
      <p className="text-gray-900">
        This project is just the beginning — every line of code brings me closer
        to becoming a better developer.
      </p>
    </section>
  );
};

export default AboutPage;
