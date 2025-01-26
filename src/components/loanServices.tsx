import { FlipText } from "@/components/ui/flip-text";

export function LoanServices() {
    return (
        <>
            <FlipText
                className="text-lg mt-10 md:block hidden font-bold -tracking-widest text-black dark:text-white md:text-5xl md:leading-normal text-center break-words md:whitespace-nowrap"
                word="Building Futures with Easy and Flexible Loan Options"
            />
            <FlipText
                className="text-lg mt-10 md:hidden block font-bold -tracking-widest text-black dark:text-white md:text-5xl md:leading-normal text-center break-words md:whitespace-nowrap"
                word="Building Futures with Easy Loan"
            />
        </>
    );
}
