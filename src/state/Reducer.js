export default (state, action) => {
  switch (action.type) {
    case "changeAniCount":
      return {
        ...state,
       aniCount: action.newAniCount
      };
  }
  switch (action.type) {
    case "changePlayer":
      return {
        ...state,
        player: action.newPlayer
      };
  }
  switch (action.type) {
    case "changeUserData":
      return {
        ...state,
        userData: action.newUserData
      };
  }
  switch (action.type) {
    
    case "changeScrollData":
      return {
        ...state,
        scrollData: action.newScrollData
      };
  }
  switch (action.type) {
    case "changeVisibleImages":
      return {
        ...state,
        visibleImages: action.newVisibleImages
      };
  }
};
