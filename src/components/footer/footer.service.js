const getFooterString = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("React E-commerce @2023 all rights reserved");
    }, 1000);
  });
};

const FooterService = {
  getFooterString,
};

export default FooterService;
