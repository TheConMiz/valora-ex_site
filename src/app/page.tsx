import { redirect } from 'next/navigation';

export default function RootPage() {
    // Catch base traffic and push it to the English route
    redirect('/en');
}