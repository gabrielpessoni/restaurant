export default {
    methods: {
        isDesktop() {
            const width = window.innnerWidth;
            return width > 767;
          },
          isSmallScreens(){
            const width = window.innnerWidth;
            return width < 767;
          }
    }
};