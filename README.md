Great! Here's a complete `README.md` tailored for your **PocketBase-powered URL Shortener**:

---

```markdown
# 🔗 PocketBase URL Shortener

A simple and efficient URL shortener built with **Node.js**, **Express**, and **PocketBase** as the backend database.

## 🚀 Features

- 🔗 Shorten single or multiple URLs
- 📊 View stats of active (non-expired) short links
- 🔁 Resolve short links to original URLs
- 🧪 Easily test all endpoints with Postman

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **Database**: PocketBase
- **Others**: JavaScript, REST API, ESM Modules

---

## 📦 Project Structure

```

url-shortener/
│
├── controllers/        # Route logic (shorten, batch, stats)
│   ├── shortenController.js
│   ├── batchController.js
│   ├── statsController.js
│   └── resolveController.js
│
├── routes/             # API endpoints
│   ├── shorten.js
│   ├── batch.js
│   ├── stats.js
│   └── resolve.js
│
├── services/
│   └── pocketbaseClient.js
│
├── utils/
│   └── generateShortCode.js
│
├── .env
├── app.js              # Main server file
└── README.md

````

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/url-shortener-pocketbase.git
cd url-shortener-pocketbase
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
POCKETBASE_URL=http://127.0.0.1:8090
```

Make sure your local PocketBase server is running.

### 4. Start the backend server

```bash
npm run dev
```

---

## 🧪 API Endpoints

| Method | Route           | Description                    |
| ------ | --------------- | ------------------------------ |
| POST   | `/shorten`      | Shorten a single URL           |
| POST   | `/batch`        | Shorten multiple URLs at once  |
| GET    | `/stats/active` | View stats of all active links |
| GET    | `/:shortCode`   | Redirects to the original URL  |

---

## 🧰 Testing with Postman

Import a collection or test manually:

### Example: POST `/shorten`

```json
{
  "url": "https://example.com"
}
```

### Example: POST `/batch`

```json
{
  "urls": [
    "https://example.com",
    "https://openai.com",
    "https://github.com"
  ]
}
```

---

## 📝 Future Improvements

* Add expiration logic
* Add rate limiting
* Add custom short code support
* Frontend interface to interact with the API

---

## 🧑‍💻 Author

**Aaditya Sandeep Ardhapurkar**
MIT Bangalore | B.Tech CSE (CyberSecurity)
[GitHub](https://github.com/YAdd2207)

---

## 📄 License

This project is licensed under the MIT License.

```

---

Let me know if you'd like to add deployment instructions, screenshots, or a Postman collection link!
```
