import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const TrainerAuth = createApi({
  reducerPath: 'TrainerAuth',

  baseQuery: fetchBaseQuery({
<<<<<<< Updated upstream:src/store/Slices/trainerAuth.ts
    baseUrl: 'http://192.168.0.117:6000',
    prepareHeaders: header => {
      header.set('Accept', 'application/json');
    },
=======
    baseUrl: 'http://192.168.0.189:3000',
>>>>>>> Stashed changes:src/store/Apis/trainerAuth.ts
  }),

  endpoints: builder => ({
    SignInTrainer: builder.mutation({
      query: body => ({
        url: '/trainer/trainerLogin',
        method: 'POST',
        body,
      }),
    }),
    SignUpTrainer: builder.mutation({
      query: body => ({
        url: '/trainer/trainerSignup',
        method: 'POST',
        body,
      }),
    }),

    TrainerForgetPass: builder.mutation({
      query: body => ({
        url: '/trainer/forgetPassword',
        method: 'POST',
        body,
      }),
    }),

    TrainerVerifyOtp: builder.mutation({
      query: body => {
        console.log('BOdy', body);
        return {
          url: `/trainer/VerifyOTP/${body._id}`,
          method: 'POST',
          body: body.data,
        };
      },
    }),
    TrainerChangePass: builder.mutation({
      query: body => ({
        url: `/trainer/resetPassword/${body.id}`,
        method: 'PATCH',
        body: body.data,
      }),
    }),
  }),
});

export const {
  useSignInTrainerMutation,
  useSignUpTrainerMutation,
  useTrainerChangePassMutation,
  useTrainerForgetPassMutation,
  useTrainerVerifyOtpMutation,
} = TrainerAuth;
