import {combineReducers} from '@reduxjs/toolkit';
import authSlice from '../Slices/AuthSlice';
<<<<<<< Updated upstream
import {TrainerAuth} from './trainerAuth';
import {userAuth} from './userAuth';
import {ResetPassword} from './resetPassword';
import {ResetOtp} from './resetOTP';
import {ForgetPassword} from './forgetPassword';
import {VerifyOTP} from './verifyOTP';
import profileImage from './profileImage';
=======
import {TrainerAuth} from '../Apis/trainerAuth';
import {userAuth} from '../Apis/userAuth';
import {Posts} from '../Apis/Post';
>>>>>>> Stashed changes

const Reducers = combineReducers({
  Auth: authSlice,
  Image: profileImage,
  [TrainerAuth.reducerPath]: TrainerAuth.reducer,
  [userAuth.reducerPath]: userAuth.reducer,
<<<<<<< Updated upstream
  [ResetPassword.reducerPath]: ResetPassword.reducer,
  [ResetOtp.reducerPath]: ResetOtp.reducer,
  [ForgetPassword.reducerPath]: ForgetPassword.reducer,
  [VerifyOTP.reducerPath]: VerifyOTP.reducer,
=======
  [Posts.reducerPath]: Posts.reducer,
>>>>>>> Stashed changes
});
export default Reducers;
