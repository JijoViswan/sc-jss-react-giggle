import { post } from './GenericService';

export function setIdentification(email) {
  return post('/identification/facet', {
    Email: email,
  });
}
