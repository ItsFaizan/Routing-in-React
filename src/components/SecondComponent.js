import React from 'react';
import { useParams } from 'react-router-dom';

  export default function SecondComponent() {
    const { id } = useParams();
  
    return (
      <div>
        <h1>Component for ID: {id}</h1>
      </div>
  
      );
    }