
import GlobalRankCounter from "./GlobalRankCounter";

export default function GlobalRank() {
  return (
    <div className="bg-white py-5 sm:pt-32">
      <div className="mx-auto max-w-9xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-lg line font-bold inter text-blue-600">
          The global leader in digital real estate investing
          </h2>
          <p className="mt-8 plus-jakarta-sans font-bold tracking-normal text-gray-900 sm:text-5xl">
          Diversify across different asset
          </p>
          <p className="mt-2 plus-jakarta-sans font-bold tracking-normal text-gray-900 sm:text-5xl">
          types and countries
          </p>
        </div>
        <GlobalRankCounter />
      </div>
    </div>
  );
}
