export default {
  plugins: [
    {
      src: "@/plugins/vuelayers.js",
      ssr: false,
    },
  ],
  modules: ["~/shared/vuelayers"],
};
