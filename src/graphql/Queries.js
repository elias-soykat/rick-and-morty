import { gql } from "@apollo/client";

export const LOAD_DATA = gql`
  query {
    characters {
      results {
        name
        image
        status
        species
        location {
          id
          name
        }
        episode {
          name
        }
      }
    }
  }
`;
