# FinanceDash

A simple real-time financial dashboard built with React, Node.js, and MongoDB.

## Setup on Replit

1. **Upload Project**:
   - Create a new Replit project (Node.js template).
   - Zip the `FinanceDash` folder and upload it via Replit's GUI (drag and drop or "Import from ZIP").

2. **Install Dependencies**:
   - In the Replit shell, run:
     ```bash
     npm run install:all
     ```

3. **Set Up MongoDB**:
   - Edit `backend/.env` in Replit.
   - Replace `MONGO_URI=your_mongodb_atlas_uri` with a MongoDB Atlas URI:
     - Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
     - Create a free cluster and get the connection string (e.g., `mongodb+srv://<user>:<pass>@cluster0.mongodb.net/FinanceDash?retryWrites=true&w=majority`).
     - Add `0.0.0.0/0` to the Atlas IP whitelist.
   - Example `backend/.env`:
     ```
     PORT=5000
     MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/FinanceDash?retryWrites=true&w=majority
     ```

4. **Run the App**:
   - In the Replit shell, run:
     ```bash
     npm start
     ```
   - Open the Replit-provided URL (e.g., `<your-replit-id>.repl.co`) to see the dashboard.

## Troubleshooting

- **MongoDB Connection Fails**:
  - Check the `MONGO_URI` in `backend/.env` and ensure the Atlas whitelist includes `0.0.0.0/0`.
- **Dependencies Fail**:
  - Run:
    ```bash
    rm -rf node_modules frontend/node_modules backend/node_modules
    npm run install:all
    ```
