const ESTADO_INICIAL = [];

const reducerDaLista = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "ADICIONA_ELEMENTO":
      return [...state, action.value];
    default:
      return state;
  }
};

export default reducerDaLista;
