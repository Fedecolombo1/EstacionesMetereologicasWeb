import { faTemperatureHalf,faTemperatureFull,faTemperatureQuarter,faTemperatureThreeQuarters, faDroplet } from "@fortawesome/free-solid-svg-icons";
import { COLD, HOT, NEUTRAL, WARM } from "../Constants";


const setColorTemp = (value) => {
    let color
    switch (true) {
      case value < 10:
            color = COLD;
        break;
        case value > 10 && value < 20:
            color = NEUTRAL;
        break;
        case value > 20 && value < 30:
            color = WARM;
        break;
        case value > 30:
            color = HOT;
        break;    
      default:
        break;
    }
    return color
  }

  const setTemperatureIcon = (value) => {
    let icon
    switch (true) {
      case value < 10:
            icon = faTemperatureQuarter;
        break;
        case value > 10 && value < 20:
            icon = faTemperatureHalf;
        break;
        case value > 20 && value < 30:
            icon = faTemperatureThreeQuarters;
        break;
        case value > 30:
            icon = faTemperatureFull;
        break;    
      default:
        break;
    }
    return icon

  }

  export {setColorTemp, setTemperatureIcon}