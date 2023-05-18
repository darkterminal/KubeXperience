'use client'

import { SiteHeader } from "@/components/nav/site-header";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'


export default function XperienceIdLayout({
    children, // will be a page or nested layout
}) {

    const router = useRouter();

    return (
        <section className="flex-1 flex flex-col">
            <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '10px' }}>
                <Button onClick={() => router.back()}>Go Back</Button>
            </div>
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </section>
    );
}