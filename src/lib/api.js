import superagent from 'superagent';

export const get = url => {
  return superagent
    .get(url)
    .then(results => results.body)
    .catch(console.error);
};