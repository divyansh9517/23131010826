
const axios = require("axios");

const API_URL = "http://20.244.56.144/evaluation-service/logs";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkaXZ5YW5zaC4yM3Njc2UxMDExODcxQGdhbGdvdGlhc3VuaXZlcnNpdHkuYWMuaW4iLCJleHAiOjE3NTEwMjM3NjksImlhdCI6MTc1MTAyMjg2OSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImI3YzE0OGM4LWI3MGItNDBmZi1iMzQxLWZkZTkzMTk3MGQwMSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImRpdnlhbnNoIHNheGVuYSIsInN1YiI6IjhjMzRmYjY4LWVkZWItNDFhMy1iOTNmLTJiMmMzNGZjZjUxYSJ9LCJlbWFpbCI6ImRpdnlhbnNoLjIzc2NzZTEwMTE4NzFAZ2FsZ290aWFzdW5pdmVyc2l0eS5hYy5pbiIsIm5hbWUiOiJkaXZ5YW5zaCBzYXhlbmEiLCJyb2xsTm8iOiIyMzEzMTAxMDgyNiIsImFjY2Vzc0NvZGUiOiJNdWFndnEiLCJjbGllbnRJRCI6IjhjMzRmYjY4LWVkZWItNDFhMy1iOTNmLTJiMmMzNGZjZjUxYSIsImNsaWVudFNlY3JldCI6ImJkYktCZEVYS3BmWG54dWgifQ.rcnKtWjq2vienAVO88TDVQibARU2U7lmLGa5d_ucRAs"; // ✅ Replace with your actual token

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      API_URL,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkaXZ5YW5zaC4yM3Njc2UxMDExODcxQGdhbGdvdGlhc3VuaXZlcnNpdHkuYWMuaW4iLCJleHAiOjE3NTEwMjM3NjksImlhdCI6MTc1MTAyMjg2OSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImI3YzE0OGM4LWI3MGItNDBmZi1iMzQxLWZkZTkzMTk3MGQwMSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImRpdnlhbnNoIHNheGVuYSIsInN1YiI6IjhjMzRmYjY4LWVkZWItNDFhMy1iOTNmLTJiMmMzNGZjZjUxYSJ9LCJlbWFpbCI6ImRpdnlhbnNoLjIzc2NzZTEwMTE4NzFAZ2FsZ290aWFzdW5pdmVyc2l0eS5hYy5pbiIsIm5hbWUiOiJkaXZ5YW5zaCBzYXhlbmEiLCJyb2xsTm8iOiIyMzEzMTAxMDgyNiIsImFjY2Vzc0NvZGUiOiJNdWFndnEiLCJjbGllbnRJRCI6IjhjMzRmYjY4LWVkZWItNDFhMy1iOTNmLTJiMmMzNGZjZjUxYSIsImNsaWVudFNlY3JldCI6ImJkYktCZEVYS3BmWG54dWgifQ.rcnKtWjq2vienAVO88TDVQibARU2U7lmLGa5d_ucRAs}`,
        },
      }
    );
    console.log("Log sent:", response.status);
  } catch (error) {
    console.error("Log failed:", error.response?.data || error.message);
  }
}

module.exports = Log;
