import { gql } from '@apollo/client'

export const GET_COUNTRIES = ({id} : {id: any}) => gql`
  query {
    continent(code: "${id}") {
      name
      countries {
        code
        name
      }
    }
  }

`

export const GET_COUNTRY = ({id} : {id: any}) => gql`
  query {
    country(code: "${id}") {
      name
      code
      native
      capital
      currency
      languages {
        name
        code
      }
    }
  }

`