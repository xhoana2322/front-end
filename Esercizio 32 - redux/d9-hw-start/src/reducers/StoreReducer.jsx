
export default function StoreReducer(state = [], action) {
  
  switch (action.type) {
      case 'ADD_COMPANY_TO_FAVOURITES':
        return [...state, action.payload]
      
      case 'REMOVE_COMPANY_TO_FAVOURITES':
        return state.filter(c => c.company_name !== action.payload.company_name)

      default:
        break
  }

  return state
}
