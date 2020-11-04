import Vue from "vue";
Vue.filter("formatCurrency", function (value) {
  // if (typeof value !== "number") {
  //   return value;
  // }
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "LAK",
    minimumFractionDigits: 0,
  });
  return formatter.format(value);
});
