export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ], 
    characters: [],
    favorites: [],
    planets: [],
    starships: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
      case 'add_character':

      return {
        ...store,
        characters: action.payload
      };

      case 'toggle_favorites':
        let favs = store.favorites
     if(favs.includes(action.payload)) {
      favs = favs.filter((fav, index) => fav !== action.payload)
     }
     else {
      favs=[...favs, action.payload]
     }

     return {
      ...store,
     favorites: favs
    };

    case 'add_planets':

    return {
      ...store,
      planets: action.payload
    };

    case 'add_starships':

    return {
      ...store,
      starships: action.payload
    };

    default:
      throw Error('Unknown action.');
  }    
}
