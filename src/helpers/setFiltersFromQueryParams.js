// Filter object must have two fields "fieldName" and "value"
import router from '@/router'
import FILTERS_TYPES from "@/constants/filters-types"
import SHOW_ROWS from "@/constants/table-rows-count"
import convertFilterToParams from "@/helpers/convertFilterToParams"

export default (filters = []) => {
  const params = router.currentRoute.query

  if (params[FILTERS_TYPES.show_rows] && !Object.values(SHOW_ROWS).includes(params[FILTERS_TYPES.show_rows])) {

    const queryParams = convertFilterToParams(filters)

    router.replace({
      path: router.currentRoute.path,
      query: {
        ...queryParams
      } 
    })
  }

  filters.forEach(filter => {
    if (params[filter.fieldName] != null) {
      filter.value = params[filter.fieldName]
    }
  })
}