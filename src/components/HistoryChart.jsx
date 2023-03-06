import React from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';

function HistoryChart() {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=7`
  );
  return <div>HistoryChart</div>;
}

export default HistoryChart;
