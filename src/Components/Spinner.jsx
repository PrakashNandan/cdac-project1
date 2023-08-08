
import { Grid,ThreeCircles } from  'react-loader-spinner'


function Spinner() {
    return (
      <div className='loadingSpinnerContainer'>
       <ThreeCircles
  height="100"
  width="100"
  color="#"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
      </div>
    )
  }
  
  export default Spinner