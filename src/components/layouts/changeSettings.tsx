import axios from "axios";
import ChangingForm from "./changingForm";

interface ApiResponse {
  message: string;
  weatherApiKey: string;
}

const ChangeSettings = () => {

  const handleWeather = async (weatherApiKey: string) => {
    try {
      await axios.post<ApiResponse>(
        `${import.meta.env.VITE_ROUTE_PATH}/update-weather-api`,
        { weatherApiKey },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 5000, // 5 second timeout
        }
      );
    } catch (error) {
      console.log(error)
  };
  }
  const handleBot = async (botApiKey: string) => {
    try {
      await axios.post<ApiResponse>(
        `${import.meta.env.VITE_ROUTE_PATH}/update-bot-api`,
        { botApiKey },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 5000, // 5 second timeout
        }
      );
    } catch (error) {
      console.log(error)
  };
  }


  return (
    <div className="flex flex-col gap-4 items-center w-full justify-center  ">
      <ChangingForm 
        heading="Change Weather API key"
        placeholder="Enter new Key"
        buttonText="Change"
        onSubmit={handleWeather}
      />
      
      <ChangingForm 
        heading="Change Bot API Key"
        placeholder="Enter new key"
        buttonText="Change"
        onSubmit={handleBot}
      />

    </div>
  );
};

export default ChangeSettings;
