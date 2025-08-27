// const express = require('express');
// const app = express();
// const bodyParse = require('body-parser');
// const cors = require('cors');

// const JWT = require('jsonwebtoken')
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');

// require('dotenv').config();
// require('./models/db');
// // const ProductRouter = require('./routes/ProductRouter');

// const PORT = process.env.PORT || 5000;

// const userSchema = new mongoose.Schema({
//     id: Number,
//     name: String,
//     email: String,
//     password: String,
// });
// const userModel = mongoose.model('user', userSchema);

// app.use(cors());
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));

// // ==== JWT AUTH MIDDLEWARE ====
// const authToken = (req, res, next) => {
//     const token = req.headers['authorization']?.replace('Bearer ', '');
//     if (!token) return res.status(401).json({ message: "Token Not Found" });
//     try {
//         const decoded = JWT.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         return res.status(403).json({ message: "Unauthorized, JWT token is required" });
//     }
// };

// app.get('/', async (req, res) => {
//     // const user = await userModel.find();
//     res.json("Hii There");
// });


// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     const user = await userModel.findOne({ email });

//     if (user && bcrypt.compareSync(password, user.password)) {
//         const token = JWT.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
//         res.status(200).json({ message: 'Login successful', token });
//     } else {
//         res.status(401).json({ message: 'Invalid email or password' });
//     }
// });

// app.post('/register', async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = new userModel({
//             name,
//             email,
//             password: hashedPassword
//         });

//         await newUser.save();
//         res.status(201).json({ message: 'User created successfully' });
//     } catch {
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// app.get('/ping', (req, res) => {
//     res.send('Pong');
// });

// app.listen(PORT, () => {
//     console.log(`Server is listening at http://localhost:${PORT}`);
// });








////////////////////////////////////////////////////////////////////////////




//working code

// const express = require('express');
// const app = express();
// const bodyParse = require('body-parser');
// const cors = require('cors');
// const JWT = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');
// const passport = require('passport');
// const session = require('express-session');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// require('dotenv').config();
// require('./models/db');

// const PORT = process.env.PORT || 5000;

// // ==== MongoDB Schema ====
// const userSchema = new mongoose.Schema({
//     id: Number,
//     name: String,
//     email: String,
//     password: String,
// });
// const userModel = mongoose.model('user', userSchema);

// // ==== Middleware ====
// app.use(cors());
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));

// // ==== Session and Passport Setup ====
// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: true,
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// // ==== Passport Google Strategy ====
// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:5000/auth/google/callback",
// }, async (accessToken, refreshToken, profile, done) => {
//     try {
//         const existingUser = await userModel.findOne({ email: profile.emails[0].value });

//         if (existingUser) {
//             return done(null, existingUser);
//         } else {
//             const newUser = new userModel({
//                 name: profile.displayName,
//                 email: profile.emails[0].value,
//                 password: "", // Google users won’t have password
//             });
//             await newUser.save();
//             return done(null, newUser);
//         }
//     } catch (err) {
//         return done(err, null);
//     }
// }));

// passport.serializeUser((user, done) => done(null, user._id));
// passport.deserializeUser(async (id, done) => {
//     const user = await userModel.findById(id);
//     done(null, user);
// });

// // ==== JWT AUTH MIDDLEWARE ====
// const authToken = (req, res, next) => {
//     const token = req.headers['authorization']?.replace('Bearer ', '');
//     if (!token) return res.status(401).json({ message: "Token Not Found" });
//     try {
//         const decoded = JWT.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         return res.status(403).json({ message: "Unauthorized, JWT token is required" });
//     }
// };

// // ==== Routes ====

// app.get('/', async (req, res) => {
//     res.json("Hii There");
// });

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     const user = await userModel.findOne({ email });

//     if (user && bcrypt.compareSync(password, user.password)) {
//         const token = JWT.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
//         res.status(200).json({ message: 'Login successful', token });
//     } else {
//         res.status(401).json({ message: 'Invalid email or password' });
//     }
// });

// app.post('/register', async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = new userModel({
//             name,
//             email,
//             password: hashedPassword
//         });

//         await newUser.save();
//         res.status(201).json({ message: 'User created successfully' });
//     } catch {
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// app.get('/ping', (req, res) => {
//     res.send('Pong');
// });

// // ==== Google OAuth Routes ====

// app.get('/auth/google',
//     passport.authenticate('google', { scope: ['profile', 'email'] })
// );

// app.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/' }),
//     (req, res) => {
//         const token = JWT.sign({ email: req.user.email, _id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
//         // Redirect with token to frontend
//         res.redirect(`http://localhost:5173?token=${token}`);
//     }
// );

// app.get('/logout', (req, res) => {
//     req.logout(() => {
//         res.redirect('/');
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server is listening at http://localhost:${PORT}`);
// });


//working code 

// const express = require('express');
// const app = express();
// const cors = require('cors');
// const JWT = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');
// const passport = require('passport');
// const session = require('express-session');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// require('dotenv').config();

// // ==== Connect to MongoDB ====
// mongoose.connect(process.env.MONGO_CONN, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error("MongoDB connection error:", err));

// // ==== MongoDB Schema ====
// const userSchema = new mongoose.Schema({
//     id: Number,
//     name: String,
//     email: String,
//     password: String,

//     // ✅ New fields
//     usedImageTrial: {
//         type: Boolean,
//         default: false,
//     },
//     usedDocTrial: {
//         type: Boolean,
//         default: false,
//     },
//     hasSubscription: {
//         type: Boolean,
//         default: false,
//     },
// });
// const userModel = mongoose.model('user', userSchema);

// // ==== Middleware ====
// app.use(cors());
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));
// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: true,
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// // ==== Passport Google Strategy ====
// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:5000/auth/google/callback",
// }, async (accessToken, refreshToken, profile, done) => {
//     try {
//         const existingUser = await userModel.findOne({ email: profile.emails[0].value });

//         if (existingUser) {
//             return done(null, existingUser);
//         } else {
//             const newUser = new userModel({
//                 name: profile.displayName,
//                 email: profile.emails[0].value,
//                 password: "",
//             });
//             await newUser.save();
//             return done(null, newUser);
//         }
//     } catch (err) {
//         return done(err, null);
//     }
// }));

// passport.serializeUser((user, done) => done(null, user._id));
// passport.deserializeUser(async (id, done) => {
//     const user = await userModel.findById(id);
//     done(null, user);
// });

// // ==== JWT Auth Middleware ====
// const authToken = async (req, res, next) => {
//     const token = req.headers['authorization']?.replace('Bearer ', '');
//     if (!token) return res.status(401).json({ message: "Token Not Found" });
//     try {
//         const decoded = JWT.verify(token, process.env.JWT_SECRET);
//         const user = await userModel.findById(decoded._id);
//         if (!user) return res.status(404).json({ message: "User not found" });
//         req.user = user;
//         next();
//     } catch (err) {
//         return res.status(403).json({ message: "Unauthorized, JWT token is required" });
//     }
// };

// // ==== Routes ====

// app.get('/', (req, res) => {
//     res.json("Hii There");
// });

// // 🔐 Register
// app.post('/register', async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         const existing = await userModel.findOne({ email });
//         if (existing) return res.status(400).json({ message: 'User already exists' });

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new userModel({ name, email, password: hashedPassword });
//         await newUser.save();
//         res.status(201).json({ message: 'User created successfully' });
//     } catch {
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// // 🔐 Login
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     const user = await userModel.findOne({ email });

//     if (user && bcrypt.compareSync(password, user.password)) {
//         const token = JWT.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
//         res.status(200).json({ message: 'Login successful', token });
//     } else {
//         res.status(401).json({ message: 'Invalid email or password' });
//     }
// });

// // 🔐 Google OAuth
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/' }),
//     (req, res) => {
//         const token = JWT.sign({ email: req.user.email, _id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
//         res.redirect(`http://localhost:5173?token=${token}`);
//     }
// );

// // 🔐 Logout
// app.get('/logout', (req, res) => {
//     req.logout(() => {
//         res.redirect('/');
//     });
// });

// // ✅ NEW: Get user status (trial/subscription)
// app.get('/api/user/status', authToken, async (req, res) => {
//     const { usedImageTrial, usedDocTrial, hasSubscription } = req.user;
//     res.json({ usedImageTrial, usedDocTrial, hasSubscription });
// });

// // ✅ NEW: Update trial usage
// app.post('/api/user/use-trial', authToken, async (req, res) => {
//     const { type } = req.body;

//     if (!['image', 'document'].includes(type)) {
//         return res.status(400).json({ message: 'Invalid type. Must be "image" or "document".' });
//     }

//     if (type === 'image') req.user.usedImageTrial = true;
//     if (type === 'document') req.user.usedDocTrial = true;

//     await req.user.save();

//     const { usedImageTrial, usedDocTrial, hasSubscription } = req.user;
//     res.json({ usedImageTrial, usedDocTrial, hasSubscription });
// });

// // Health check
// app.get('/ping', (req, res) => res.send('Pong'));

// // ==== Start Server ====
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is listening at http://localhost:${PORT}`);
// });



// server.jsconst 
const express = require("express");
const app = express();
const cors = require('cors');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

// ==== Connect to MongoDB ====
mongoose.connect(process.env.MONGO_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ==== MongoDB Schema ====
const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    password: String,
    usedImageTrial: {
        type: Boolean,
        default: false,
    },
    usedDocTrial: {
        type: Boolean,
        default: false,
    },
    hasSubscription: {
        type: Boolean,
        default: false,
    },
    trialExpiresAt: {
        type: Date,
        default: null,
    }
});
const userModel = mongoose.model('user', userSchema);

// ==== Middleware ====
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// ==== Passport Google Strategy ====
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const existingUser = await userModel.findOne({ email: profile.emails[0].value });

        if (existingUser) {
            return done(null, existingUser);
        } else {
            const newUser = new userModel({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: "",
            });
            await newUser.save();
            return done(null, newUser);
        }
    } catch (err) {
        return done(err, null);
    }
}));

passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser(async (id, done) => {
    const user = await userModel.findById(id);
    done(null, user);
});

// ==== JWT Auth Middleware ====
const authToken = async (req, res, next) => {
    const token = req.headers['authorization']?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: "Token Not Found" });
    try {
        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        if (!user) return res.status(404).json({ message: "User not found" });

        // ✅ Auto-expire trial when checking token
        if (user.trialExpiresAt && user.trialExpiresAt < new Date()) {
            user.usedImageTrial = false;
            user.usedDocTrial = false;
            user.trialExpiresAt = null;
            await user.save();
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(403).json({ message: "Unauthorized, JWT token is required" });
    }
};

// ==== Routes ====
app.get('/', (req, res) => {
    res.json("Hii There");
});

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existing = await userModel.findOne({ email });
        if (existing) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch {
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = JWT.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.status(200).json({ message: 'Login successful', token });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        const token = JWT.sign({ email: req.user.email, _id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.redirect(`http://localhost:5173?token=${token}`);
    }
);

app.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

// ✅ Get user trial/subscription status
app.get('/api/user/status', authToken, async (req, res) => {
    const { usedImageTrial, usedDocTrial, hasSubscription, trialExpiresAt } = req.user;
    res.json({ usedImageTrial, usedDocTrial, hasSubscription, trialExpiresAt });
});

// ✅ Mark trial usage
app.post('/api/user/use-trial', authToken, async (req, res) => {
    const { type } = req.body;

    if (!['image', 'document'].includes(type)) {
        return res.status(400).json({ message: 'Invalid type. Must be "image" or "document".' });
    }

    // ✅ Start trial with expiry if not already started
    if (!req.user.trialExpiresAt) {
        req.user.trialExpiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    }

    if (type === 'image') req.user.usedImageTrial = true;
    if (type === 'document') req.user.usedDocTrial = true;

    await req.user.save();

    const { usedImageTrial, usedDocTrial, hasSubscription, trialExpiresAt } = req.user;
    res.json({ usedImageTrial, usedDocTrial, hasSubscription, trialExpiresAt });
});


// ✅ Get full profile
app.get('/profile', authToken, async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id).select('-password');
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Error fetching profile" });
    }
});

// ✅ Update profile (name only for now)
app.put('/profile/update', authToken, async (req, res) => {
    try {
        const { name } = req.body;
        const user = await userModel.findByIdAndUpdate(
            req.user._id,
            { name },
            { new: true }
        ).select('-password');

        res.json({ message: "Profile updated", user });
    } catch (err) {
        res.status(500).json({ message: "Error updating profile" });
    }
});


// Health check
app.get('/ping', (req, res) => res.send('Pong'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
