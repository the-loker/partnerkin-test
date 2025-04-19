export type TMainApiResponse<T> = {
  response: {
    page: {
      seo: {
        title: string;
        text: string;
        h1: string;
      };
      noindex: boolean;
    };
    data: {
      list: Array<T>;
    };
  };
};
