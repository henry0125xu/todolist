const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models").user;

const jwt_auth = (passport) => {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = process.env.PASSPORT_SECRET;
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      User.findOne({ _id: jwt_payload._id }, function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
  );
};
const google_auth = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser((_id, done) => {
    User.findById(_id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google/redirect",
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        User.findOne({ email: profile.emails[0].value }).then((user) => {
          if (user) {
            console.log("User already exist~~");
            done(null, user);
          } else {
            new User({
              email: profile.emails[0].value,
              username: profile.displayName,
              password: "GMAIL_PASSWORD",
            })
              .save()
              .then((user) => {
                console.log("New user created~~");
                done(null, user);
              });
          }
        });
      }
    )
  );
};

module.exports = {
  jwt_auth,
  google_auth,
};
