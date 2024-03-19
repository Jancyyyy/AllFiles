import constant from "./constant";
import axios from "axios";
import { AV_API_KEY } from '../global/global'
import Swal from "sweetalert2";

const apiError = (error, customMessage = null) => {
  error.message = error.message ? error.message : customMessage;
  Swal.fire({
    icon: "warning",
    text: error?.response?.data?.error || error?.message,
    confirmButtonColor: "#3085d6",
  });
};

const getData = async (stockName) => {
  try {
    const response = await axios.get(
      `${constant.api_name}${stockName}&apikey=${AV_API_KEY}`
    );
    console.log(response);
    if (typeof response.data.Information == 'string' || typeof response.data["Error Message"] == 'string') {
      let sendMessage = response?.data?.Information ? response?.data?.Information : response?.data["Error Message"];
      apiError(response, sendMessage);
    }
    else {
      return response.data;
    }

  } catch (error) {

    apiError(error);
  }

};

export default { getData };