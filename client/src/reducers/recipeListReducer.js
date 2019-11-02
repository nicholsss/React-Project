//Nimetään mahdollisesti paremman tää reducer
// import servicer

const reducer = (state = null, action) => {
  switch (action.type) {
    case "MEAT":
      return action.data;

    case "VEGETARIAN":
      return null;

    case "SOUP":
      return action.data;

    case "FISH":
      return action.data;

    default:
      return state;
  }

  
};
