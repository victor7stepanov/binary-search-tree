import {useEffect, useState} from "react";
import {Circle} from "./components/Circle/Circle";
import getRandomIntInclusive from "./helper-functions/random";

export default function App() {
  const [circleValue, setCircleValue] = useState(null);

  const spaceHandler = (event) => {
      if (event.code === 'Space') {
          setCircleValue(getRandomIntInclusive(-100, 100));
      }
  }

  useEffect(() => {
      document.addEventListener('keydown', spaceHandler);
      return () => {
          document.removeEventListener('keydown', spaceHandler)
      }
  }, [])

  return (
      circleValue ? <Circle value={circleValue} />
                  : <div style={{textAlign: 'center'}}>
                        Press Space
                    </div>
  );
}

