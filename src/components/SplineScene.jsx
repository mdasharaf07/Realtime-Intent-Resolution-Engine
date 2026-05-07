import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SplineScene = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
            {/* 
         NOTE: This is a public Spline URL for a 3D Robot/Orb scene.
         If you have your own design, replace the 'scene' prop URL.
      */}
            <Suspense fallback={<div style={{ color: 'white', textAlign: 'center', paddingTop: '20%' }}>Loading 3D Engine...</div>}>
                <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
            </Suspense>
        </div>
    );
};

export default SplineScene;
