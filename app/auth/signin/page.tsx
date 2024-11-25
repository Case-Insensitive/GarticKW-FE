import SignIn from '@/components/auth/sign-in';
import SignInFirebase from '@/components/auth/sign-in-firebase';
import React from 'react';

const SignInPage = async () => {
	return (
		<div>
			<SignIn />
			<SignInFirebase />
		</div>
	);
};

export default SignInPage;
