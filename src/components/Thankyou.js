import React from 'react'
import Link from 'next/link'
export const Thankyou = () => {
    return (
        <div class="flex h-screen items-center justify-center">
            <div>
                <div class="flex flex-col items-center space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-28 w-28 text-green-600" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 class="text-4xl font-bold">Thank You !</h1>
                    <p>Thank you for your Purchase! Check your email for a link to the guide.</p>
                    <a
                        class="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-3 w-3" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        <Link href="/">
                        <span class="text-sm font-medium">Let's Invest More</span>
                        </Link>
                    </a>
                </div>
            </div>
        </div>
    )
}
