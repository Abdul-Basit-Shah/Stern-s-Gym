import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../../services/Urls';

export const Posts = createApi({
  reducerPath: 'TrainerPosts',

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints(builder) {
    return {
      getTrainers: builder.query({
        query: token => ({
          url: '/trainer/getAllTrainers',
          method: 'GET',
          headers: {
            authorization: `Bearer ${token}`,
          },
        }),
      }),
    };
  },
});

export const {useGetTrainersQuery} = Posts;
