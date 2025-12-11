import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Stars from './Stars';

export default function ThreeBackground({ darkMode = true }) {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
            </Canvas>
        </div>
    );
}
