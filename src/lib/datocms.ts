import { GraphQLClient } from "graphql-request";


const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = '9f3ca769b9066753cc46784cb6913d';


export function request({ query, variables, includeDrafts, excludeInvalid }:any) {

  const headers:any = {
    authorization: `Bearer ${API_TOKEN}`,
  };
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true';
  }
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true';
  }
  const client = new GraphQLClient(API_URL, { headers });
  return client.request(query, variables);
}