import QRCode from "react-native-qrcode-svg";
import Scanner from "../components/Scanner";
import { StyleSheet } from "react-native";

export default function QRScanPage() {


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });


    return (
        <Scanner/>
    )

}