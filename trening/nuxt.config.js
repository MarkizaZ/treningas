export default {
  plugins: [
    '@/plugins/sidebarTools.js',
    {
      src: "@/plugins/vuelayers.js",
      ssr: false,
    },
  ],
  modules: ["~/shared/vuelayers"],
};
