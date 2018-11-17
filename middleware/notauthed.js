// to be used on pages where authenticated users shouldn't be allowed e.g. account creation and password reset
export default function (context) {
  if (context.app.$auth.loggedIn) {
    context.app.router.replace('/');
  }
}
