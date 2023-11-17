import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react';
import { cookies } from 'next/headers'


type Props = {};

export const getData  = async () => {
    const cookieStore = cookies()
    const token = cookieStore.get('tokenFront')

	const res = await fetch(`https://nft-backend-beryl.vercel.app/user/655520a1894fe892fcdae1aa`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
            'Cookie': `token=${token?.value}`, // Set the cookie in the request headers  
		},
		cache: 'force-cache',
	});
	const data = await res.json();
    // console.log(data, 'this is data')
    
	return data
};

const page = async () => {


    const userData = await getData()

	return <div>{JSON.stringify(userData)}</div>;
};

export default page;
