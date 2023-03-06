import React from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import Skeleton from './Skeleton';

function CoinDetail() {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`
  );

  if (!response) {
    return (
      <div className='wrapper-container mt-8'>
        <Skeleton className='h-72 w-full mb-10' />
      </div>
    );
  }

  return (
    <div className='my-6'>
      <div className='flex gap-2 items-center'>
        <img src={response.image.small} alt={response.name} />
        <h1 className='text-2xl mb-2 capitalize font-bold'>{response.name}</h1>
      </div>
      {/* dangerouslySetInnetHTML: removes HTML that would normally show up in the text */}
      <p
        dangerouslySetInnerHTML={{ __html: response.description.en }}
        className='mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline '
      ></p>
    </div>
  );
}

export default CoinDetail;
