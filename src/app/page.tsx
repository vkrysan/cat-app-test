'use client';
import './styles/globals.css';
import { useEffect, useState } from 'react';
import CatFact from './components/CatFact';
import CatFactsList from './components/CatFactsList';
import Pagination from './components/Pagination';
import SideImages from './components/SideImages';

const Home = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); 
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(false);

  
  useEffect(() => {

    const fetchData = async () => {
      
      const res = await fetch(`https://catfact.ninja/facts?page=${page}`);
      const data = await res.json();
      setTotalPages(data.total_pages || 10); 
      setHasNext(page < totalPages);
      setHasPrev(page > 1);
    };

    
    fetchData();
  }, [page, totalPages]);


  return (
    <div className="container">
      <SideImages />

      <div className="relative z-10 p-4">
        <h1 className="text-8xl font-bold fixed top-10 h1-adaptive">Cat Facts</h1>
        <h3 className="text-xl font-semibold fixed top-36 h3-adaptive">No random cat fact</h3>

        <CatFact />

        <CatFactsList page={page} setPage={setPage} />

        <Pagination
          page={page}
          setPage={setPage}
          hasNext={page < totalPages}
          hasPrev={page > 1}
        />
      </div>
    </div>
  );
};

export default Home;
