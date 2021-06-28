import React from 'react';
import Link from 'next/link';

const Sidebar = () => {

    return (
        <>
            <div className="bg-white w-16 md:w-32 border-1 h-screen inline-block shadow-md">
                <div className="block px-5 py-5 border-3 mt-4 ml-4 mr-4 mb-4">
                    <img src="/logo/logo.png" className="w-full h-full" />
                </div>
                <Link href="">
                    <a className="focus:bg-test1 focus:text-white px-2 py-2 border-3 rounded-2xl ml-6 mr-6 h-16 flex flex-col justify-center cursor-pointer hover:bg-test1 hover:text-white m-auto mb-3">
                        <i className="material-icons text-2xl inline-block text-center justify-self-center text-vistaBlue">home</i>
                        <span className="block mt-1 text-center font-semibold text-xs text-vistaBlue">Home</span>
                    </a>
                </Link>

                <Link href="">
                    <a className="focus:bg-test1 focus:text-white px-2 py-2 border-3 rounded-2xl ml-6 mr-6 h-16 flex flex-col justify-center cursor-pointer hover:bg-test1 hover:text-white m-auto mb-3">
                        <i className="material-icons text-2xl inline-block text-center justify-self-center text-vistaBlue">restaurant</i>
                        <span className="block mt-1 text-center font-semibold text-xs text-vistaBlue">Menu</span>
                    </a>
                </Link>

                <Link href="">
                    <a className="focus:bg-test1 focus:text-white px-2 py-2 border-3 rounded-2xl ml-6 mr-6 h-16 flex flex-col justify-center cursor-pointer hover:bg-test1 hover:text-white m-auto mb-3">
                        <i className="material-icons text-2xl inline-block text-center justify-self-center text-vistaBlue">history</i>
                        <span className="block mt-1 text-center font-semibold text-xs text-vistaBlue">History</span>
                    </a>
                </Link>
                <Link href="">
                    <a className="focus:bg-test1 focus:text-white px-2 py-2 border-3 rounded-2xl ml-6 mr-6 h-16 flex flex-col justify-center cursor-pointer hover:bg-test1 hover:text-white m-auto mb-3">
                        <i className="material-icons text-2xl inline-block text-center justify-self-center text-vistaBlue">account_balance_wallet</i>
                        <span className="block mt-1 text-center font-semibold text-xs text-vistaBlue">Wallet</span>
                    </a>
                </Link>

                <Link href="">
                    <a className="focus:bg-test1 focus:text-white px-2 py-2 border-3 rounded-2xl ml-6 mr-6 h-16 flex flex-col justify-center cursor-pointer hover:bg-test1 hover:text-white m-auto mb-3">
                        <i className="material-icons text-2xl inline-block text-center justify-self-center text-vistaBlue">local_offer</i>
                        <span className="block mt-1 text-center font-semibold text-xs text-vistaBlue">Promo</span>
                    </a>
                </Link>
                <Link href="">
                    <a className="focus:bg-test1 focus:text-white px-2 py-2 border-3 rounded-2xl ml-6 mr-6 h-16 flex flex-col justify-center cursor-pointer hover:bg-test1 hover:text-white m-auto mb-3">
                        <i className="material-icons text-2xl inline-block text-center justify-self-center text-vistaBlue">settings</i>
                        <span className="block mt-1 text-center font-semibold text-xs text-vistaBlue">Settings</span>
                    </a>
                </Link>
                <Link href="">
                    <a className="focus:bg-test1 focus:text-white px-2 py-2 border-3 rounded-2xl ml-6 mr-6 h-16 flex flex-col justify-end cursor-pointer hover:bg-test1 hover:text-white m-auto mb-3 mt-14">
                        <i className="material-icons text-2xl inline-block text-center justify-self-center text-vistaBlue">sign_out</i>
                        <span className="block mt-1 text-center font-semibold text-xs text-vistaBlue">Logout</span>
                    </a>
                </Link>
            </div>
        </>
    )
};

export default Sidebar;

