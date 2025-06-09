import express from "express";
import morgan from "morgan";
import playersRoutes from "./routes/players.routes";
import statusRoutes from "./routes/status.routes";

// Port
const PORT = 3000;

const app = express();

// Middlewares
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Routes
app.use("/", statusRoutes);
app.use("/players", playersRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
