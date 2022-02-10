import './App.css';
import {useEffect, useState} from "react";

export default function App(props) {
  const [circle, setCircle] = useState(null);

  const circleTemplate = (
      <div className={'circle'}>
          <div className={'circle__value'}>
              {props.value}
          </div>
      </div>
  )

  const handleSpace = (event) => {
      if (event.code === 'Space') {
          setCircle(circleTemplate);
      }
  }

  useEffect(() => {
      document.addEventListener('keydown', handleSpace);
      console.log('effect')
      return () => {
          document.removeEventListener('keydown', handleSpace)
      }
  }, [])

  return (
      circle
  );
}

