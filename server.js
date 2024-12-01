const express = require("express");
const path = require("path");
const os = require("os");

function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    for (const iface of interfaces[interfaceName]) {
      // Check for IPv4 and non-internal (external) address
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "127.0.0.1"; // Fallback to localhost
}

const app = express();
const PORT = 3000; // You can choose any available port
const HOST = getLocalIPAddress();

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Route to serve your index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
