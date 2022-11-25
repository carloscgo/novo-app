# State management

- [Redux](#redux)
- [Sagas](#sagas)

## Redux

Redux is a predictable state container for JavaScript apps.

The `src/utils/store` directory is where all shared application state lives

Read more in the [Redux](https://redux.js.org/introduction/getting-started) docs.

## Sagas

Sagas are implemented using Generator functions. To express the Saga logic, we yield plain JavaScript Objects from the Generator. We call those Objects Effects.

[Redux Saga](https://redux-saga.js.org/docs/introduction/GettingStarted) is used to fulfill the function of managing the Effects.
