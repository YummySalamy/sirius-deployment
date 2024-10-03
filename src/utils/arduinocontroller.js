import socket from '../socket'

socket.on('hello', (data) => alert(data) );


const CheckConn = (experiment) => {
  return new Promise(resolve => {
    socket.emit('connectDev', {manufacturer: 'owo', experiment: experiment, frequency: 2});
    socket.once('connectDev', (status) => {
      if (status.status) {
        resolve(status.status);
      } else {
        alert(status.message);
      }
    });
  });
};

  const manageData = async (experiment, isSendingData) => {
    console.log("dato",isSendingData)
    const isConnected = await CheckConn(experiment);
    
    const dataFn = data => console.log(data);

    if (isConnected) {
      if (!isSendingData) {
        socket.emit('fakeExp');
      } else { // It's sending data
        socket.emit('pauseFake');
      }
    } else {
      console.log("Failed conection");
    }
  };
  const portControl = {
    CheckConn,
    manageData
  };


  export {portControl}; 
 