'use client'
import { useRouter } from 'next/navigation'
import Modal  from '@/components/Modal'
 
export default async function Login() {
  const router = useRouter()
  return (
    <Modal>
      {/* <span onClick={() => router.back()}>Close modal</span> */}
      <h1>Login</h1>
      ...
    </Modal>
  )
}