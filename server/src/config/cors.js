import allowedOrigins from './allowed_origins';


const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Note allowed by CORS'));
        }
    }
}

export default corsOptions;