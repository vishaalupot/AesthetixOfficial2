import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';


function Model(props) {
    const { scene } = useGLTF("/officiatry6.glb");
    return <primitive object={scene} scale={0.1} {...props} />
}
function Room() {
    return (
        <div>
            {/* <div>
                <h2 className='what mt-12'>WHAT WE DO</h2>
            </div>
            <div className='h-[94vh] w-[100vw]'>
                <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ "position": "absolute" }}>
                    <color attach="background" args={["#FFFFFF"]} />
                    <PresentationControls speed={1.5} global zoom={1.5} polar={[-0.1, Math.PI / 4]}>
                        <Stage environment={null}>
                            <Model scale={0.01} />
                        </Stage>
                    </PresentationControls>
                </Canvas>
            </div> */}
        </div>
    );
}

export default Room;
