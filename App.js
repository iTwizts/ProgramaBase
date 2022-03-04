import React, { useState } from 'react';


import { View, Button, Image } from 'react-native';
import RNQRGenerator from 'rn-qr-generator';

const App = () => {

  const [qrCode, setQrCode] = useState(false)
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Generar Codio QR" onPress={() => {
        RNQRGenerator.generate({
          value: 'jose manuel',
          height: 100,
          width: 100,
        })
        .then((response) => {
          const {uri, width, height, base64 } = response;
          this.setState({ imageUri: uri});
       })
       .catch(error => console.log('cannot create QR code', error));

      }} />
        {qrCode !== false && <Image source={{uri: qrCode }} style={{marginTop: 10, width: 100, height: 100}} />} 
    </View>
  )
}

export default App;
