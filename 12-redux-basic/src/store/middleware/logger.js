// Curring, SNA
// const logger = ({ getStore, dispatch }) => (next) => (action) => {
const logger = (param) => (store) => (next) => (action) => {
  console.log("Logging: ", param);
  next(action);
};

export default logger;
