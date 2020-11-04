export default ({ $strapi, app }) => {
  $strapi.hook("error", (e) => {
    app.$toast.error(e.message);
  });
};
