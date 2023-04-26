import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function ProgressBar(props)  {
  const {percentage} = props;

  return (
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  )
}