import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
    {
        title: "Wedding Loans",
        category: "Celebrate Your Special Day",
        body: "Turn your dream wedding into a reality with our Wedding Loans. Cover Valima, Jahez, furniture, and more with loans up to PKR 5 Lakh and a convenient 3-year repayment plan.",
        img: "https://avatar.vercel.sh/wedding",
    },
    {
        title: "Home Construction Loans",
        category: "Build Your Dream Home",
        body: "From structure to finishing, our Home Construction Loans are designed to help you build your ideal home. Access up to PKR 10 Lakh with a repayment period of 5 years.",
        img: "https://avatar.vercel.sh/home",
    },
    {
        title: "Business Startup Loans",
        category: "Start Your Business Today",
        body: "Launch your business with confidence using our Business Startup Loans. Get up to PKR 10 Lakh for shop setup, machinery, rent, and more with a 5-year repayment plan.",
        img: "https://avatar.vercel.sh/business",
    },
    {
        title: "Education Loans",
        category: "Invest in Education",
        body: "Shape a brighter future with our Education Loans. Whether it's for university fees or your child's education, we provide flexible loan amounts with up to 4 years to repay.",
        img: "https://avatar.vercel.sh/education",
    },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    title,
    category,
    body,
    img,
}: {
    title: string;
    category: string;
    body: string;
    img: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {title}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{category}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function ServiceMarquee() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.category} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.category} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}


export default ServiceMarquee