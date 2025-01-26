import Footer from '@/components/footer'
import InnerPageBanner from '@/components/InnerPageBanner'
import InnerPagesHeader from '@/components/InnerPagesHeader'
import { LoanServices } from '@/components/loanServices'
import ServicesDropdown from '@/app/loans/components/servicesDropdown'
import React from 'react'

export default function Loans() {
    return (
        <>
            <InnerPagesHeader />
            <InnerPageBanner currentPage={"Loans"} previousPage={'Home'} />
            <LoanServices />
            <ServicesDropdown />
            <Footer />
        </>
    )
}
