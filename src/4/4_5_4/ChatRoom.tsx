import { useEffect } from 'react';
import { createEncryptedConnection, createUnencryptedConnection } from './chat';
export default function ChatRoom({ roomId, isEncrypted }: {
    roomId: string; isEncrypted : boolean
}) {
    useEffect(() => {
        const createConnection = isEncrypted? createEncryptedConnection : createUnencryptedConnection;
        const connection = createConnection(roomId);
        connection.connect();
        return () => connection.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomId, isEncrypted]);

    return <h1>Welcome to the {roomId} room!</h1>;
}
