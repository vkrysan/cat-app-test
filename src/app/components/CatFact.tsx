'use client';

import useSWR from 'swr';
import Image from 'next/image';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const CatFact = () => {
  const { data, mutate, error } = useSWR('https://catfact.ninja/fact', fetcher);

  if (error) return <div>Failed to load fact</div>;
  if (!data) return 
  <div>
    <Image
      src="/images/loading.gif"
      alt="Random Cat"
      width={600}
      height={200}
      className="w-full rounded-lg"
    />
  </div>;

  return (
    <div className="flex relative adaptive bg-random items-start mb-8 mt-40 border border-black rounded">
      <div className="flex flex-col p-6 w-full ">
        <h2 className="text-6xl font-semibold mb-14">Random Fact</h2>
        <h3 className="text-2xl font-medium ">{data.fact}</h3>
        <button
          onClick={() => mutate()}
          className="generate-button"
        >
          Regenerate
        </button>
      </div>
      <Image
        src="/images/cat.png"
        alt="Random Cat"
        width={600}
        height={200}
        className="w-full rounded-lg"
      />
    </div>
  );
};

export default CatFact;
