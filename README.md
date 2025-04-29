# Joke Generator Web App
A responsive web application where users can click a button to fetch and display random jokes. The frontend will be built with Angular, the backend with Django (REST Framework), and jokes will be fetched from a public joke API like Official Joke API or JokeAPI.

## Features
- Random Joke Generation: Fetch and display random jokes with one click

- Clean UI: Responsive design with loading indicators

- Error Handling: Graceful handling of API failures

- Optional Features:

  - Favourite/like jokes

  - Joke history tracking

  - Category filtering

  - Multi-language support
## Tech Stack
Frontend
  - Angular v19+
  - Angular Material (for UI components)
  - RxJS (for state management)

Backend
  - Django 4.x
  - Django REST Framework
  - PostgreSQL (optional, for storing favourites/history)

External API

- [Official Joke API](https://official-joke-api.appspot.com/random_joke) or [JokeAPI](https://v2.jokeapi.dev/joke/Any)

## Installation
Prerequisites
  - Node.js (v18+)
  - Python (3.9+)
  - PostgreSQL (optional)

## Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```
2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Apply migrations:
```bash
python manage.py migrate
```

5. Create a superuser (optional):
```bash
python manage.py createsuperuser
```

6. Run the development server:
```bash
python manage.py runserver
```

## Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
ng serve
```
4. Open your browser to `http://localhost:4200`

## Configuration (Optional)
Backend Environment Variables
Create a .env file in the backend directory with the following variables:
```bash
DEBUG=True
SECRET_KEY=your-secret-key-here
DATABASE_URL=postgres://user:password@localhost:5432/jokegenerator
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:4200
```

Frontend Environment
Create `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api',
};
```
## API Endpoints
| Endpoint |  Method    | Description |
| :---:   | :---: | :---: |
| /api/joke/ | GET | Fetch a random joke |
| /api/joke/favorite/ | POST | Fetch a random joke |
| /api/joke/favorites/ | GET | List user's favorite jokes |
| /api/joke/hostory/ | GET | List joke request history |

## Project Structure

```bash
joke-generator/
├── backend/          # Django project
│   ├── jokes/       # Django app (main logic)
│   ├── config/      # Django project settings
│   ├── manage.py
│   └── requirements.txt
└── frontend/        # Angular project
    ├── src/
    │   ├── app/     # Angular components, services
    │   ├── assets/
    │   └── environments/ # Optional
    ├── angular.json
    └── package.json
```
## Project Setup 
```
https://github.com/sachinksamad1/joke-generator.git
````
### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Apply migrations:
```bash
python manage.py migrate
```

5. Create a superuser (optional):
```bash
python manage.py createsuperuser
```

6. Run the development server:
```bash
python manage.py runserver
```

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```
Run the development server:
```bash
ng serve
```

Open your browser to `http://localhost:4200`

## Contributing
Fork the project
- 1. Create your feature branch (git checkout -b feature/AmazingFeature)
- 2. Commit your changes (git commit -m 'Add some AmazingFeature')
- 3. Push to the branch (git push origin feature/AmazingFeature)
- 4. Open a Pull Request

License
Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

## Contact
Sachin Kumar Samad - sachinksamad@gmail.com

Project Link: `https://github.com/sachinksamad1/joke-generator`
