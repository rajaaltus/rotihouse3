export default (context, inject) => {
  inject("url", () => {
    return context.env.apiUrl;
  });
};
