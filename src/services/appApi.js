import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


// define a service using base URL
const appApi = createApi({
    reducerPath :'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001'
    }),

    endpoints: (builder)=>({
        // Creating a user
        signupUser: builder.mutation({
            query: (user) =>({
                url:'/users',
                method:'POST',
                body:user,
            }),
        }),
        // login user
        loginUser:builder.mutation({
            query:(user)=> ({
                url:"/users/login",
                method:"POST",
                body:user,
            }),
        }),

        // logout
        logoutUser:builder.mutation({
            query:(payload)=>({
                url:"/logout",
                method:"DELETE",
                body:payload,
            }),
        }),
    }),

});

export const {useLoginUserMutation,useLogoutUserMutation,useSignupUserMutation} = appApi;
export default appApi