import { gql } from '@apollo/client'

export const GET_CONTINETS = gql`
  query {
    continents {
      code
      name
    }
  }


`