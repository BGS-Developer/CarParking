// Filter object must have two fields "fieldName" and "value"
export default (filters = []) => {
  const queryParams = {}
  filters.forEach(filter => {
    if (filter.value != null & filter.value != '') {
      queryParams[filter.fieldName] = filter.value
    }
  })

  return queryParams 
}