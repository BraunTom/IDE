const React = require("react");

export const InterpreterContext = React.createContext({});
export const InterpreterProvider = InterpreterContext.Provider;
export const InterpreterConsumer = InterpreterContext.Consumer;