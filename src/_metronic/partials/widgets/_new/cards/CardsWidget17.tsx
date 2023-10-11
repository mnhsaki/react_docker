import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

type Props = {
  className: string;
  description: string;
  color: string;
  img: string;
};

type ServerLog = {
  id: number;
  ipAddress: number;
  hostName: string;
  totalStorage: string;
  usedStorage: string;
  usedStoragePercentage: string;
  availableStorage: string;
};

const CardsWidget17 = ({ className, description, color, img }: Props) => {
  const [serverLogs, setServerLogs] = useState<ServerLog[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = () => {
    axios
      .get('https://dhorolasms.net/api/login_api')
      .then(response => {
        setServerLogs(response.data);
      })
      .catch(error => {
        setError(error.message);
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const displayedLogs = serverLogs.slice(1, 2); // Display only the first 5 logs

  return (
    <div className={`card-deck ${className}`}>
    {displayedLogs.map(serverLog => (
      <Card
        key={serverLog.id}
        className="text-center"
        style={{ backgroundColor: color }}
      >
        <Card.Header>
          <Card.Title>HostName: {serverLog.hostName}</Card.Title>
         
        </Card.Header>
        <Card.Body>
       <Card.Text> Id:{serverLog.id}</Card.Text>
       <Card.Text> ipAddress:{serverLog.ipAddress}</Card.Text>
          <Card.Text>Total Storage: {serverLog.totalStorage}</Card.Text>
          <Card.Text>Used Storage: {serverLog.usedStorage}</Card.Text>
          <Card.Text>
            Used Storage Percentage: {serverLog.usedStoragePercentage}
          </Card.Text>
          <Card.Text>Available Storage: {serverLog.availableStorage}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  </div>
  );
};

export { CardsWidget17 };
