const initState = {
  loading: false,
  token: localStorage.getItem("token"),
  admin: false,
  username: '',
  password: '',
  id: '',
  name: '',
  birthdate: '',
  question1: '',
  question2: '',
  question3: '',
  answer1: '',
  answer2: '',
  answer3: '',
  email: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      localStorage.setItem("token", action.payload);
      state = { ...state, token: action.payload };
      return state;
    case 'CHECK_AUTH_PENDING':
      state = { ...state, loading: true };
      return state;
    case 'CHECK_AUTH_REJECTED':
      state = { ...state, loading: false };
      return state;
    case 'CHECK_AUTH_FULFILLED':
      if (!action.payload.data.success) {
        localStorage.clear();
        state = { ...state, loading: false, admin: false };
      }
      else {
        state = { ...state,
          loading: false, 
          admin: action.payload.data.message.admin,
          username: action.payload.data.message.username,
         

         };
      }
      return state;
    case 'READ_BY_TOKEN_PENDING':
      state = { ...state, loading: true };
      return state;
    case 'READ_BY_TOKEN_REJECTED':
      state = { ...state, loading: false };
      return state;
    case 'READ_BY_TOKEN_FULFILLED':
      state = { ...state,
        loading: false,
        password: action.payload.data.message.password,
        id: action.payload.data.message.personal_id,
        name: action.payload.data.message.flname,
        birthdate: action.payload.data.message.birthday,
        question1: action.payload.data.message.question1,
        question2: action.payload.data.message.question2,
        question3: action.payload.data.message.question3,
        answer1: action.payload.data.message.answer1,
        answer2: action.payload.data.message.answer2,
        answer3: action.payload.data.message.answer3,
        email: action.payload.data.message.email,
      };
      return state;
    case 'SIGN_OUT':
      state = { ...state, token: action.payload };
      return state;
    default:
      return state;
  }
};