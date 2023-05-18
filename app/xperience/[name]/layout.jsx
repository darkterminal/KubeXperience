import { SiteHeader } from "@/components/nav/site-header";

export default function XperienceIdLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section className="flex-1 flex flex-col" >
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </section>
    );
}