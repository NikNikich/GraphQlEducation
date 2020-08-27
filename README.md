 Train-radar backend

#### Config example

Add `.env` file with content:

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=password
DATABASE=fitually
DEVICE_KEY=apikeidevice
WEBSOCKET_EVENT=update_status

```

Socket connection example:

socket = io('http://localhost:3000');
socket.on('update_status', function(data){
  console.log("event");
  console.log(data)
});
