const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "995512317772-6qgmtugrfngb64g8ar76jugfbna6ie83.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "18008129624b50c64863";
GITHUB_CLIENT_SECRET = "099d503ffa773936bdca445cd2a444b3fcdb0b37";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
