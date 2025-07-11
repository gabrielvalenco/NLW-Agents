import { Navigate, useParams } from "react-router-dom"

type roomParams = {
    roomId: string
}

export function Room() {
const params = useParams<roomParams>()
    
if (!params.roomId) {
   return <Navigate replace to="/" />
}

    return (
        <div>Room details {params.roomId}</div>
    )
}