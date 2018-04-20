const initState = {
  username: '',
  error: false,
  success: true,
  message: null,
  question1: '',
  question2: '',
  question3: '',
  answer1: '',
  answer2: '',
  answer3: '',
  failed: 0,
  password: '',
  cpassword: '',
  reset: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'SET_FORGET_USERNAME':
      state = { ...state, username: action.payload };
      return state;
    case 'SET_ANSWER_1':
      state = { ...state, answer1: action.payload };
      return state;
    case 'SET_ANSWER_2':
      state = { ...state, answer2: action.payload };
      return state;
    case 'SET_ANSWER_3':
      state = { ...state, answer3: action.payload };
      return state;
    case 'SET_PASSWORD':
      state = { ...state, password: action.payload };
      return state;
      case 'SET_CPASSWORD':
      state = { ...state, cpassword: action.payload };
      return state;  
    case 'INCREASE_FAILED':
      state = { ...state, failed: action.payload };
      return state;
    case 'GET_USER_FULFILLED':
      console.log(action.payload.data.message);
      state = { ...state, success: action.payload.data.success, question1: action.payload.data.message.question1, question2: action.payload.data.message.question2, question3: action.payload.data.message.question3, error: false };
      return state;
      case 'CHECK_ANSWER_FULFILLED':
      state = { ...state, success: action.payload.data.success, message: action.payload.data.message, error: false };
      return state;
      case 'CHECK_ANSWER_REJECTED':
      state = { ...state, success: action.payload.data.success, message: action.payload.data.message, error: true };
      return state;
      case 'CHANGE_PASSWORD_FULFILLED':
      state = { ...state, success: action.payload.data.success, message: action.payload.data.message, error: false, reset: action.payload.data.success };
      return state;
      case 'CHANGE_PASSWORD_REJECTED':
      state = { ...state, success: action.payload.data.success, message: action.payload.data.message, error: true };
      return state;
    default:
      return state;
  }
};
