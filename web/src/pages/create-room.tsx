import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

type GetRoomsAPIResponse = Array<{
    id: string
    name: string
}>

export function CreateRoom() {
const { data, isLoading, error } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
        try {
            const response = await fetch('http://localhost:3333/rooms')
            
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`)
            }
            
            const result = await response.json()
            
            // Ensure we have an array to work with
            return Array.isArray(result) ? result : []
        } catch (error) {
            console.error('Error fetching rooms:', error)
            return []
        }
    }
})

    return (
        <div>
            <div>Create Room</div>

            {isLoading && <p>Loading...</p>}
            {error && <p>Error loading rooms. Please try again.</p>}
            <div className="flex flex-col gap-1">
                {Array.isArray(data) && data.length > 0 ? (
                    data.map(room => {
                        return (
                            <Link key={room.id} to={`/room/${room.id}`}>
                                {room.name}
                            </Link>
                        )
                    })
                ) : (
                    <p>No rooms available</p>
                )}
            </div>
        </div>
    )
}