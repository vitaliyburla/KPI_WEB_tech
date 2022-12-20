import tw from 'twin.macro';

export const Container = tw.div`flex w-screen h-screen bg-orange-100 items-start justify-center`;

export const Card = tw.div`w-96 py-8 px-16 flex flex-col bg-orange-200 rounded border border-orange-300 gap-3 mt-1/5vh`;

export const Button = tw.button`mt-2 py-2 px-2 rounded bg-orange-500 text-orange-50 font-semibold cursor-pointer hover:bg-orange-600 active:bg-orange-700 ease-in-out duration-100`;

export const LoadingContainer = tw.div`flex flex-1 justify-center items-center`;

export const Legend = tw.p`text-orange-600 font-semibold`;

export const Line = tw.div`flex gap-2`;
