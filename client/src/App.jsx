import React, { useState, useEffect } from 'react'

function App() {

  const [youtubeCTA, setYoutubeCTA] = useStae({});

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/youtube");

        if (!response.ok) {
          throw new Error('HTTP error! Status:${response.status}');
        }

        const data = await response.json();
        console.log(data);

      } catch (error) {
          console.log("Error etching data :{error.message}")
      }
    }

    fetchData();
  }, [])

  return (
    <div>App</div>
  )
}

export default App