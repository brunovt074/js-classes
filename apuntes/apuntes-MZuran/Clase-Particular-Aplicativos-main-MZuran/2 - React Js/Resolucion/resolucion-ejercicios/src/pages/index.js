import { ImageWheel } from "@/components/ImageWheel";

const pictureArrayInput = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cavendish_Banana_DS.jpg/1200px-Cavendish_Banana_DS.jpg",
  "https://andreuprados.com/wp-content/uploads/2017/01/apple_0.jpg.webp" ,
  'https://media.discordapp.net/attachments/710515425976254556/1312761539664674887/apple.png'
  ];
  

export default function Home() {

  return (
    <>
    <h1>Index</h1>
    <ImageWheel ImageArray={pictureArrayInput} />
    </>
  );
}
