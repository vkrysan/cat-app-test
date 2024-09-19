import { useState, useEffect } from 'react';
import useSWR from 'swr';
import LikeButton from './LikeButton';

interface Fact {
  fact: string;
  id: string;
  likes: number;
  liked: boolean;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

const CatFactsList = ({ page }: { page: number }) => {
  const { data, error, isLoading } = useSWR(`https://catfact.ninja/facts?page=${page}`, fetcher);
  const [facts, setFacts] = useState<Fact[]>([]);

  useEffect(() => {
    if (data) {
      const updatedFacts = data.data.map((fact: any) => ({
        fact: fact.fact,
        id: fact.id,
        likes: fact.likes || 0,
        liked: fact.liked || false,
      }));
      setFacts(updatedFacts);
    }
  }, [data, page]);

  if (error) return <div>Error loading facts.</div>;

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center items-center h-96">
          <div className="text-lg font-bold">Loading...</div>
        </div>
      )}

      <div className="card-container">
        {facts.map(fact => (
          <div key={fact.id} className="p-4 border card rounded-lg shadow-md relative">
            <h3 className="text-xl font-semibold mb-2">Cat Fact</h3>
            <p className="text-sm mb-4">{fact.fact}</p>

            <div className="absolute bottom-2 right-2">
              <LikeButton
                initialLikes={fact.likes}
                initiallyLiked={fact.liked}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatFactsList;
