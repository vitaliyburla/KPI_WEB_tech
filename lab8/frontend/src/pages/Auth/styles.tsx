import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = tw.div`flex w-screen h-screen bg-green-100 items-start justify-center`;

export const Input = tw.input`w-full py-2 px-3 outline-none rounded text-sm bg-green-50`;

export const Form = tw.form`w-96 py-8 px-16 flex flex-col bg-green-200 rounded border border-green-300 gap-3 mt-1/5vh`;

export const SubmitButton = tw.input`mt-2 py-2 px-2 rounded bg-green-500 text-green-50 font-semibold cursor-pointer hover:bg-green-600 active:bg-green-700 ease-in-out duration-100`;

export const Header = tw.div`mb-2`;

export const Error = tw.div`mt-1 px-2 py-1 bg-red-400 border border-red-500 rounded text-sm text-white text-center whitespace-normal`;

export const Title = tw.p`font-semibold text-green-500 text-center`;

export const Subtitle = styled.p`
    ${tw`font-semibold text-green-500 text-center text-xs`}
    > span {
        ${tw`text-green-600 underline underline-offset-4 cursor-pointer`}
    }
`;
