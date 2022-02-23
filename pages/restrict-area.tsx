import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const RestrictArea = () => {
    const { data: session } = useSession()

    if (session) {
        return (
            <div>
                <h1>Restrict Area</h1>
                <button onClick={() => signOut()}>sign out</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Área restrita para usuários</h1>
            <Link href={'/signin'}>
                <a>Entrar</a>
            </Link>
        </div>
    )
}

export default RestrictArea
