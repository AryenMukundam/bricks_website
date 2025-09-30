import { createSlice, current } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    studentData: null,
    isAuthenticated: false,
    loading: false
  },
  reducers: {
    setStudentData: (state, action) => {
      state.studentData = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.studentData = null;
      state.isAuthenticated = false;
    }
  }
});

export const { setStudentData, logout } = studentSlice.actions;
export default studentSlice.reducer;
