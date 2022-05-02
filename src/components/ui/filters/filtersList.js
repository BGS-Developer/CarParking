import FILTERS_TYPES from "@/constants/filters-types"
export const filterSearch = {
  id: 1,
  type: FILTERS_TYPES.search,
  fieldName: 'search',
  value: ''
}

export const filterShowRows = {
  id: 2,
  type: FILTERS_TYPES.show_rows,
  fieldName: 'show_rows',
  value: '50'
}

export const filterPage = {
  id: 3,
  type: FILTERS_TYPES.page,
  fieldName: 'page',
  value: '1'
}