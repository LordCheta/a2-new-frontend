export default {
  methods: {
    amountWithComma(amount) {
      let nStr = amount + "";
      let x, x1, x2;
      if ("" === nStr.trim()) {
        return 0;
      }
      nStr += "";
      x = nStr.split(".");
      x1 = x[0];
      x2 = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
      }
      return x1 + x2;
    }
  },
};
