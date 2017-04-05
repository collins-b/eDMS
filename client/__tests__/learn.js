import expect from 'expect';
import * as actions from '../src/actions/Signup';
import {ADD_USER} from '../src/actions/Signup';

describe('actions', () => {
  it('should create an action to add a user', () => {
    const payload = {};
    const expectedAction = {
      type: ADD_USER,
      payload
    }
    expect(actions.addUser(payload)).toEqual(expectedAction);
  })
})
