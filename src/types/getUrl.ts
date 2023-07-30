type FilterProps = {
  limit?: number | string | undefined;
};

type GetUrlProps = {
  filterOptions: FilterProps;
  baseUrl: string;
};

const getUrl = ({ baseUrl, filterOptions }: GetUrlProps) => {
  const { limit = 4 } = filterOptions;

  const isLimit = limit ? `limit=${limit}&` : "";

  const queryString = `${baseUrl}?${isLimit}`;
  return queryString;
};

export default getUrl;
