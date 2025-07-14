import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 h-screen overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        {/* Left Column - Header, Subheader, and Image */}
        <div className="flex flex-col h-full">
          <header className="mb-6 flex-shrink-0">
            <h1 className="text-4xl font-bold mb-4">Mint</h1>
            <p className="text-gray-600">Bring a fresh mint to the world.</p>
          </header>

          <div className="flex-1 min-h-0 flex items-start justify-center">
            <Image
              src="/images/soul.jpg"
              alt="Profile image"
              width={600}
              height={400}
              className="max-w-full max-h-full rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>

        {/* Right Column - Blog List */}
        <div className="flex flex-col h-full overflow-hidden">
          <h2 className="text-2xl font-bold mb-6 flex-shrink-0">
            Latest Posts
          </h2>
          <div className="space-y-6 overflow-y-auto flex-1 pr-4">
            <article className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">
                <Link
                  href="/blog/react-common-mistakes"
                  className="hover:text-blue-500"
                >
                  React Common Mistakes: How to Avoid and Fix Them
                </Link>
              </h3>
              <p className="text-gray-500 text-sm mb-3">January 15, 2024</p>
              <p className="text-gray-600 break-words text-sm leading-relaxed">
                A comprehensive guide to the most frequent React mistakes and
                practical solutions with code examples to help you write better,
                more maintainable React applications...
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
