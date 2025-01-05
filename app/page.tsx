'use client';

import { useAuth } from '@/context/AuthContext';
import WalletCard from '@/components/wallet_card';
import { ethers } from 'ethers';

import { getSubmissionFee, submitMusic, voteOnSubmission, getWinners } from '@/utils/contractUtils'; 
import HomeScreen from '@/components/home_screen';
import { use } from 'react';


export default function Home() {
	const { userAddr , walletSdk,chainId} = useAuth();
    
    

	return (
		<div className="page-container">
			{/* ((!userAddr) || (chainId!=='0x61') || false )  */}


			{((!userAddr) || (chainId!=='0x1ABDAB8') || false ) ? (
				
				<WalletCard />
				
			) : (<>
			
			<HomeScreen /> 


</>)}

           
			
			
		</div>
	);
}
