import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, Sphere} from "@react-three/drei";

function App() {

  return (
    <>
     <Canvas>
         <Sphere>
             <meshStandardMaterial color="hotpink" />
         </Sphere>
         <OrbitControls />
         <Environment preset="city" />
     </Canvas>
    </>
  )
}

export default App
