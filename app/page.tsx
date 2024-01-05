import { Button, buttonVariants } from '@/components/ui/button'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { authOptions } from './utils/auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return redirect('/login')
  }
  if (session){
    return redirect('/home')
  }
}
