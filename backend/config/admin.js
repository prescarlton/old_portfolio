module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bdc2bc698857ebbfddc386e4811366eb'),
  },
});
