export function mapSearchParamsToQueryString(queryObj: {
  [key: string]: string | string[];
}) {
  const qs = Object.keys(queryObj)
    .map(key => {
      const keyValue = queryObj[key];

      if (!keyValue) return '';

      if (typeof keyValue === 'string') {
        return [`${key}=${keyValue}`];
      } else {
        return keyValue.map(v => `${key}=${v}`);
      }
    })
    .flat()
    .filter(i => i);

  return qs.join('&');
}
