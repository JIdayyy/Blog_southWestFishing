const style = {
    flexContainer: (direction: string): string =>
        `flex flex-${direction} items-center align-middle justify-center p-10 w-full h-full absolute top-0 left-0`,
    modal: "flex flex-col items-center align-middle justify-center bg-black rounded-4 p-10 relative",
    button: (color: string): string =>
        `bg-${color}-400 px-4 py-2 text-white font-bold rounded-2 my-4`,
    input: (): string =>
        `border border-black px-4 py-2 my-2 w-full rounded-2 focus-outline-none outline-none text-black font-bold`,
    label: (): string => `text-white font-bold w-full text-left`,
};
export default style;
