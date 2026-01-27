async function GetUserIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    const ip = data.ip;
    return ip;
  } catch (error) {
    console.error("Failed to fetch IP address:", error);
  }
}

window.onload = GetUserIP;
