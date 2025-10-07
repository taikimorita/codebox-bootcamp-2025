export default function Home() {
  return (
    <main
      style={{ backgroundColor: "brown" }}
      className="flex min-h-screen flex-col items-center justify-center bg-red-500"
    >
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        🔥🔥🔥🔥 Welcome to My First Next.js + Tailwind Page! 🔥🔥🔥🔥
      </h1>

      <button
        style={{ backgroundColor: "orange" }}
        className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition"
      >
        Hire Me! 😎😎😎😎 (please)
      </button>

      <p
        style={{ backgroundColor: "black" }}
        className="text-lg text-gray-700 mb-6"
      >
        I am living in your walls
      </p>

      <div className="flex justify-center items-center gap-4 mt-6">
        <img
          src="/T.gif"
          alt="Dancing T GIF"
          className="h-16 mt-6 animate-bounce"
        />

        <img
          src="/A.gif"
          alt="Dancing A GIF"
          className="h-16 mt-6 animate-bounce"
        />

        <img
          src="/I.gif"
          alt="Dancing I GIF"
          className="h-16 mt-6 animate-bounce"
        />

        <img
          src="/K.gif"
          alt="Dancing K GIF"
          className="h-16 mt-6 animate-bounce"
        />

        <img
          src="/I.gif"
          alt="Dancing I GIF"
          className="h-16 mt-6 animate-bounce"
        />
      </div>

      <div className="flex items-center justify-center mt-10">
        <img
          src="/cool-skeleton-on-a-motorcycle-cool.gif"
          alt="cool skelly on a bike (left)"
          className="h-20 animate-bounce"
          style={{ marginRight: "100px" }}
        />

        <img
          src="/jeffers.gif"
          alt="my last name (cool)"
          className="h-28 animate-bounce"
          style={{ height: "160px", width: "400px" }}
        />

        <img
          src="/cool-skeleton-on-a-motorcycle-cool.gif"
          alt="cool skelly on a bike (right)"
          className="h-20 animate-bounce"
          style={{ marginLeft: "100px" }}
        />
      </div>

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Hi, I&apos;m Taiki Jeffers 👋
        </h2>
        <p className="text-gray-600 mt-2">Fun Fact: I like to unicycle</p>
      </section>
    </main>
  );
}
