/*import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import portfolioRoute from "./routes/portfolioRoute.js"; // Ensure .js extension
import path from "path";


// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middlewares
app.use(cors({
  origin: "http://localhost:5173", // Change this to match your frontend URL
  methods: "POST",
  credentials: true,
}));
app.use(express.json());

//static files 
app.use(express.static(path.join(__dirname,"./client/dist")))
// Routes
app.use("/api/v1/portfolio", portfolioRoute);

app.get('*',function(req,res){
  res.sendFile(path.sendFile(path.join(__dirname,'./client/dist/index.html')))
})

// Port configuration
const PORT = process.env.PORT ;

// Start server
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});

export default app;*/

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import portfolioRoute from "./routes/portfolioRoute.js"; // Ensure .js extension
import path from "path";
import { fileURLToPath } from "url";

// Polyfill __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middlewares
app.use(cors({
  origin: "http://localhost:5173", // Change this to match your frontend URL
  methods: "POST",
  credentials: true,
}));
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "./client/dist")));

// Routes
app.use("/api/v1/portfolio", portfolioRoute);

// Catch-all route for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

// Port configuration
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});

export default app;

