import themeReducer from 'reducers/theme';

describe('reducers',()=>{
  // test unknow type to return default state
  it('handle action with unknow type', () => {
    const action = {
      type: 'UNKNOW_TYPE',
    };
    const newState = themeReducer({ color: 'default' }, action);
    expect(newState).toEqual({ color: 'default' });
  });

  // test GET_THEME type to change colour to red
  it('handle action of type GET_THEME', () => {
    const action = {
      type: 'GET_THEME',
      payload: {
        color: 'red',
      },
    };
    const newState = themeReducer({ color: 'default' }, action);
    expect(newState).toEqual({ color: 'red' });
  });
})

